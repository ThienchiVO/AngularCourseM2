import { Component } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { EventColor } from 'calendar-utils';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ResumePatientDayComponent } from './resume-patient-day/resume-patient-day.component';

const colors: EventColor = {
  primary: '#2D6974',
  secondary: '#68B39F',
};

interface PatientCountByMonth {
  numero_mois: number;
  annee: number;
  data: PatientCountByDays[];
}

interface PatientCountByDays {
  numero_jour: number;
  nombre_patient: number;
}

@Component({
  selector: 'phalanger-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  // Filtrer par l'utilisateur et renvoyer les données
  fakePatientCountByDaysData: PatientCountByMonth[] = [
    {
      numero_mois: 6,
      annee: 2023,
      data: [
        {
          numero_jour: 1,
          nombre_patient: 2,
        },
        {
          numero_jour: 4,
          nombre_patient: 1,
        },
        {
          numero_jour: 10,
          nombre_patient: 5,
        },
      ],
    },
    {
      numero_mois: 7,
      annee: 2023,
      data: [
        {
          numero_jour: 4,
          nombre_patient: 2,
        },
        {
          numero_jour: 13,
          nombre_patient: 1,
        },
        {
          numero_jour: 18,
          nombre_patient: 5,
        },
      ],
    },
  ];

  patients: CalendarEvent[] = [];

  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();

  constructor(private _bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {
    for (const month of this.fakePatientCountByDaysData) {
      for (const day of month.data) {
        for (let i = 0; i < day.nombre_patient; i++) {
          this.patients.push({
            start: new Date(
              month.annee,
              month.numero_mois - 1,
              day.numero_jour
            ),
            title: 'Patient',
            color: colors,
          });
        }
      }
    }
  }

  openDayResume(event: any) {
    const config = {
      data: {
        date: event.event.start,
      },
      hasBackdrop: true,
      disableClose: false,
      panelClass: 'phalanger-bottom-sheet-container',
    };
    this._bottomSheet.open(ResumePatientDayComponent, config);
  }
}
