import { Component, OnInit } from '@angular/core';
import { Prescription } from '../../models/Prescription';

interface PrescriptionSessionRest extends Prescription {
  session_rest: number;
  patient_name: string;
  pathology: string;
}

@Component({
  selector: 'phalanger-prescriptions',
  templateUrl: './prescriptions.component.html',
  styleUrls: ['./prescriptions.component.scss'],
})
export class PrescriptionsComponent implements OnInit {
  fakePrescriptionsList: PrescriptionSessionRest[] = [
    {
      id: 1,
      patient_name: 'Carl FUCHS',
      session_count: 10,
      prescription_by: 'Dr. VO',
      session_rest: 4,
      pathology: 'Tendinite',
    },
    {
      id: 1,
      patient_name: 'Hal PAGUET',
      session_count: 13,
      prescription_by: 'Dr. VO',
      session_rest: 0,
      pathology: 'Arthrose',
    },
    {
      id: 1,
      patient_name: 'Barbie CHETTE',
      session_count: 10,
      prescription_by: 'Dr. VO',
      session_rest: 1,
      pathology: 'Entorse',
    },
    {
      id: 1,
      patient_name: 'Otto MATIQUE',
      session_count: 5,
      prescription_by: 'Dr. VO',
      session_rest: 0,
      pathology: 'Déchirure musculaire',
    },
    {
      id: 1,
      patient_name: 'Sam LÉKASSE',
      session_count: 7,
      prescription_by: 'Dr. VO',
      session_rest: 7,
      pathology: 'Quelque chose',
    },
  ];

  fakePrescriptionOnGoingList: PrescriptionSessionRest[] = [];
  fakePrescriptionCompletedList: PrescriptionSessionRest[] = [];

  ngOnInit() {
    this.fakePrescriptionOnGoingList = this.fakePrescriptionsList.filter(
      prescription => prescription.session_rest > 0
    );
    this.fakePrescriptionCompletedList = this.fakePrescriptionsList.filter(
      prescription => prescription.session_rest == 0
    );
  }
}
