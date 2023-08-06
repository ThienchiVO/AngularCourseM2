import { Component, OnInit } from '@angular/core';
import { Practitioner } from '../../models/Practitioner';
import { Session } from '../../models/Meeting';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

interface CurrentRoute {
  durationDrive: number;
  sessions: Session[];
}

interface PatientToSchedule {
  id: number;
  session_rest: number;
  days_last_session_ago: number;
  name: string;
}

interface PatientToCheck {
  id_patient: number;
  name_patient: string;
  id_session: number;
  date_uncheck_session: Date;
}

@Component({
  selector: 'phalanger-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss'],
})
export class DashboardContentComponent implements OnInit {
  fakePractitioner: Practitioner = {
    id: 1,
    firstname: 'Thien chi',
    lastname: 'VO',
    start_days: 28800000,
    end_days: 64800000,
  };

  fakeCurrentRoute: CurrentRoute = {
    durationDrive: 7200000,
    sessions: [
      {
        id: 1,
        duration: 1800000,
      },
      {
        id: 2,
        duration: 3600000,
      },
      {
        id: 3,
        duration: 1800000,
      },
    ],
  };

  fakePatientListToSchedule: PatientToSchedule[] = [
    {
      id: 1,
      session_rest: 3,
      days_last_session_ago: 30,
      name: 'Delphine LACROIX',
    },
    {
      id: 2,
      session_rest: 2,
      days_last_session_ago: 25,
      name: 'Martin PAUL',
    },
    {
      id: 3,
      session_rest: 1,
      days_last_session_ago: 21,
      name: 'Carl FUCHS',
    },
    {
      id: 4,
      session_rest: 4,
      days_last_session_ago: 28,
      name: 'Lucas BURLOT',
    },
  ];

  fakePatientListToCheck: PatientToCheck[] = [
    {
      id_patient: 1,
      name_patient: 'Anne ESTHÉSIE',
      id_session: 1,
      date_uncheck_session: new Date('2021-03-01'),
    },
    {
      id_patient: 2,
      name_patient: 'Jean TUBE',
      id_session: 2,
      date_uncheck_session: new Date('2021-03-02'),
    },
    {
      id_patient: 3,
      name_patient: 'Carl FUCHS',
      id_session: 3,
      date_uncheck_session: new Date('2021-03-03'),
    },
    {
      id_patient: 4,
      name_patient: 'Judas SPERGE',
      id_session: 4,
      date_uncheck_session: new Date('2021-03-04'),
    },
    {
      id_patient: 5,
      name_patient: 'Daisy DRATÉ',
      id_session: 5,
      date_uncheck_session: new Date('2021-03-05'),
    },
    {
      id_patient: 6,
      name_patient: 'Ella LESYEUBLEU',
      id_session: 6,
      date_uncheck_session: new Date('2021-03-06'),
    },
    {
      id_patient: 7,
      name_patient: 'Théo JASMIN',
      id_session: 7,
      date_uncheck_session: new Date('2021-03-07'),
    },
  ];

  currentDate: string | null;
  currentRouteDurationEnd = 0;
  allPatientToSchedule = false;
  allPatientToCheck = false;

  constructor(public datePipe: DatePipe, private router: Router) {
    this.currentDate = datePipe.transform(new Date(), 'dd/MM/yyyy');
  }

  ngOnInit() {
    this.currentRouteDurationEnd =
      (this.fakePractitioner.start_days ?? 0) +
      this.fakeCurrentRoute.durationDrive;
    this.fakeCurrentRoute.sessions.forEach(session => {
      this.currentRouteDurationEnd += session.duration;
    });
  }

  msToTime(duration: number | undefined): string {
    if (duration === undefined) {
      return '00:00:00';
    }

    let seconds: string | number = Math.floor((duration / 1000) % 60);
    let minutes: string | number = Math.floor((duration / (1000 * 60)) % 60);
    let hours: string | number = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + ':' + minutes + ':' + seconds;
  }

  formatDate(date: Date): string {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1),
      day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('/');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
