import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Practitioner } from '../../../models/Practitioner';

@Component({
  selector: 'phalanger-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {}

  fakeUser: Practitioner = {
    id: 1,
    firstname: 'Delphine',
    lastname: 'BELLE',
    phone_number: '06 12 34 56 78',
    email: 'belleDephine@gmail.com',
    profession: 'Orthophoniste',
    start_days: 28800000,
    end_days: 61200000,
    address: "1 rue de l'orthophonie, 75000 Paris",
    medical_acts: [
      {
        code: 'CDRP002',
        description: "Épreuves de dépistage de surdité avant l'âge de 3 ans",
      },
      {
        code: 'HAPD001',
        description: 'Section de bride muqueuse ou de frein intrabuccal',
      },
      {
        code: 'YYYY020',
        description: 'Forfait de réanimation niveau B',
      },
    ],
  };
  ngOnInit(): void {
    // TO DO - get user details from data
  }

  msToTime(duration: number | undefined): string {
    if (duration === undefined) {
      return '00:00:00';
    }

    let minutes: string | number = Math.floor((duration / (1000 * 60)) % 60);
    let hours: string | number = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return hours + ':' + minutes;
  }
}
