import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root',
})
export class MapsService {
  private API_URL = environment.location_api;
  private API_KEY = environment.location_api_key;

  constructor(private httpClient: HttpClient) {}

  getMap() {
    return new Observable((observer: Observer<any>) => {
      const map = L.map('map', {
        zoom: 13,
      });

      const tiles = L.tileLayer(
        `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,
        {
          maxZoom: 18,
        }
      );

      tiles.addTo(map);

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { longitude, latitude } = position.coords;
            map.setView([longitude, latitude], 13);
          },
          error => {
            console.error('Error retrieving location', error);
            // Centrer la carte sur une position par défaut en cas d'erreur
            map.setView([39.8282, -98.5795], 13);
          }
        );
      } else {
        console.error('Geolocation is not supported');
        // Centrer la carte sur une position par défaut si la géolocalisation n'est pas prise en charge
        map.setView([39.8282, -98.5795], 13);
      }

      observer.next(map);
      observer.complete();
    });
  }

  optimizeRoute(coordinates: [number, number][]): Observable<any> {
    const waypoints = coordinates
      .map(coord => `${coord[0]},${coord[1]}`)
      .join(';');

    return this.httpClient.get(
      `${this.API_URL}/optimize/driving/${waypoints}?key=${this.API_KEY}&roundtrip=false&source=first&destination=last&geometries=geojson&overview=full`
    );
  }

  addOptimizedRouteToMap(coordinates: [number, number][], mapInstance: L.Map) {
    this.optimizeRoute(coordinates).subscribe(data => {
      if (data.code !== 'Ok') {
        console.error('Error optimizing route:', data.code);
        return;
      }

      // Ajouter chaque waypoint comme un point sur la carte
      data.waypoints.forEach((waypoint: { location: [number, number] }) => {
        this.addPointToMap(
          [waypoint.location[1], waypoint.location[0]],
          mapInstance
        );
      });

      // Ajouter la route à la carte
      const route = data.trips[0].geometry.coordinates;

      // inverser les coordonnées pour Leaflet de route = [longitude, latitude]
      route.forEach((coord: [number, number]) => {
        coord.reverse();
      });
      this.addRouteToMap(route, mapInstance);
    });
  }

  addPointToMap(point: [number, number], map: L.Map) {
    L.marker(point)
      .addTo(map)
      .on('click', () => {
        alert(`Clicked on ${point}`);
      });
  }

  addRouteToMap(route: any, map: L.Map) {
    // Supposons que route soit un tableau de points
    const polyline = L.polyline(route, { color: 'red' }).addTo(map);
    // Ajuste la vue de la carte pour montrer toute la route
    map.fitBounds(polyline.getBounds());
  }

  // Return totalDoruée en millisecondes
  getTotalDuration(coordinates: [number, number][]) {
    return new Observable((observer: Observer<any>) => {
      this.optimizeRoute(coordinates).subscribe(data => {
        if (data.code !== 'Ok') {
          console.error('Error optimizing route:', data.code);
          return;
        }
        const tripDuration = data.trips[0].duration;
        const totalSessions =
          (data.waypoints.length * 1800 + tripDuration) * 1000;
        observer.next(totalSessions);
        observer.complete();
      });
    });
  }
}
