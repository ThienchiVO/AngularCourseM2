import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { SettingsComponent } from './settings/settings.component';
import { AddMeetingComponent } from './add-element/add-meeting/add-meeting.component';
import { AddPrescriptionComponent } from './add-element/add-prescription/add-prescription.component';
import { AddPatientComponent } from './add-element/add-patient/add-patient.component';
import { AddPractitionerComponent } from './add-element/add-practitioner/add-practitioner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardContentComponent,
    PrescriptionsComponent,
    SettingsComponent,
    AddMeetingComponent,
    AddPrescriptionComponent,
    AddPatientComponent,
    AddPractitionerComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
