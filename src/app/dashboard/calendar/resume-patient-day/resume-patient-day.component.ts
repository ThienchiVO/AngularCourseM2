import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Patient } from '../../../models/Patient';

@Component({
  selector: 'phalanger-resume-patient-day',
  templateUrl: './resume-patient-day.component.html',
  styleUrls: ['./resume-patient-day.component.scss'],
})
export class ResumePatientDayComponent {
  // J'envoie une date, je récupère la liste des patients de la journée
  fakesPatient: Patient[] = [
    {
      id: 1,
      firstname: 'Delphine',
      lastname: 'BELLE',
      phone_number: '06 12 34 56 78',
      address: "1 rue de l'orthophonie, 75000 Paris",
    },
    {
      id: 1,
      firstname: 'Carl',
      lastname: 'FUCHS',
      phone_number: '06 12 34 56 78',
      address: "1 rue de l'orthophonie, 75000 Paris",
    },
  ];
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {}
}
