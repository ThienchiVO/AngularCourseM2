import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MedicalAct } from '../../../models/MedicalAct';
import { Patient } from '../../../models/Patient';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { AddElementsBottomSheet } from '../../dashboard.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'phalanger-add-meeting',
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.scss'],
})
export class AddMeetingComponent {
  fakePatientList: Patient[] = [
    {
      id: 1,
      lastname: 'Jean',
      firstname: 'TENBIEN',
    },
    {
      id: 2,
      lastname: 'Anna',
      firstname: 'LIZGRAMMATICALE',
    },
    {
      id: 3,
      lastname: 'Anne',
      firstname: 'IMAL',
    },
  ];

  fakeMedicalActList: MedicalAct[] = [
    {
      code: 'CEQP002',
      description: 'Statokinésimétrie avec stabilométrie',
    },
    {
      code: 'LBQP002',
      description: 'Enregistrement électronique des mouvements de la mandibule',
    },
    {
      code: 'AHLB001',
      description: 'Bloc anesthésique continu du plexus brachial',
    },
  ];

  isMedicalMeeting = true;

  medicalMeetingForm = new FormGroup({
    patient: new FormControl<number>(0, Validators.required),
    date: new FormControl<Date>(new Date(), Validators.required),
    duration: new FormControl<number>(0, Validators.required),
    note: new FormControl<string>('', Validators.required),
    medical_acts: new FormControl<number[]>([], Validators.required),
  });

  otherMeetingForm = new FormGroup({
    label: new FormControl<string>('', Validators.required),
    date: new FormControl<Date>(new Date(), Validators.required),
    duration: new FormControl<number>(0, Validators.required),
    note: new FormControl<string>('', Validators.required),
    adress: new FormControl<string>('', Validators.required),
  });

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<AddElementsBottomSheet>,
    private _snackBar: MatSnackBar
  ) {}

  validateMedicalMeeting(): void {
    this._snackBar.open('Rendez-vous médical ajouté', 'Fermer', {
      duration: 2000,
    });
    this._bottomSheetRef.dismiss();
  }

  validateOtherMeeting(): void {
    this._snackBar.open('Rendez-vous ajouté', 'Fermer', {
      duration: 2000,
    });
    this._bottomSheetRef.dismiss();
  }
}
