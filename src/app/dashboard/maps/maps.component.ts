import { Component, OnInit } from '@angular/core';
import { MapsService } from 'src/app/services/maps.service';

@Component({
  selector: 'phalanger-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {
  private map: any;
  private markers: [number, number][] = [
    [4.8355352, 45.736345],
    [4.8475354, 45.7286965],
    [4.887755, 45.744009],
    [4.8987, 45.731149],
  ];
  constructor(private mapsService: MapsService) {}

  ngOnInit() {
    this.mapsService.getMap().subscribe(map => {
      this.map = map;
      this.mapsService.addOptimizedRouteToMap(this.markers, this.map);
      this.mapsService.getTotalDuration(this.markers).subscribe(duration => {
        console.log(duration);
      });
    });
  }
}
