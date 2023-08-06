import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import {
  MatBottomSheet,
  MatBottomSheetConfig,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AddMeetingComponent } from './add-element/add-meeting/add-meeting.component';
import { AddPrescriptionComponent } from './add-element/add-prescription/add-prescription.component';
import { AddPatientComponent } from './add-element/add-patient/add-patient.component';
import { AddPractitionerComponent } from './add-element/add-practitioner/add-practitioner.component';

@Component({
  selector: 'phalanger-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    const config: MatBottomSheetConfig = {
      hasBackdrop: true,
      disableClose: false,
      panelClass: 'phalanger-bottom-sheet-container',
    };

    this._bottomSheet.open(AddElementsBottomSheet, config);
  }
}

@Component({
  selector: 'add-elements-bottom-sheet',
  templateUrl: 'dashboard-add-elements-bottom-sheet.html',
  standalone: true,
  imports: [MatListModule, AngularMaterialModule],
})
export class AddElementsBottomSheet {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<AddElementsBottomSheet>,
    private _bottomSheet: MatBottomSheet
  ) {}

  openLink(): void {
    this._bottomSheetRef.dismiss();
  }

  openAddMeeting() {
    const config = {
      hasBackdrop: true,
      disableClose: false,
      panelClass: 'phalanger-bottom-sheet-container',
    };
    this._bottomSheet.open(AddMeetingComponent, config);
    this._bottomSheetRef.dismiss();
  }

  openAddPrescription() {
    const config = {
      hasBackdrop: true,
      disableClose: false,
      panelClass: 'phalanger-bottom-sheet-container',
    };
    this._bottomSheet.open(AddPrescriptionComponent, config);
    this._bottomSheetRef.dismiss();
  }

  openAddPatient() {
    const config = {
      hasBackdrop: true,
      disableClose: false,
      panelClass: 'phalanger-bottom-sheet-container',
    };
    this._bottomSheet.open(AddPatientComponent, config);
    this._bottomSheetRef.dismiss();
  }

  openAddPractitioner() {
    const config = {
      hasBackdrop: true,
      disableClose: false,
      panelClass: 'phalanger-bottom-sheet-container',
    };
    this._bottomSheet.open(AddPractitionerComponent, config);
    this._bottomSheetRef.dismiss();
  }
}
