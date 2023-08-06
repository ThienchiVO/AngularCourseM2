import { Practitioner } from './Practitioner';
import { MedicalAct } from './MedicalAct';

export interface Meeting {
  id?: number;
  type?: string;
  date?: Date;
  duration: number;
  description?: string;
  adress?: string;
  practitioner_id?: Practitioner;
  pic?: Blob;
}

export interface Session extends Meeting {
  patient_id?: number;
  attendance_tracking?: boolean;
  medical_acts?: MedicalAct[];
  medical_assessment?: string;
  provided?: boolean;
}
