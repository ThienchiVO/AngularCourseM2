import { MedicalAct } from './MedicalAct';

export interface Practitioner {
  id: number;
  lastname: string;
  firstname: string;
  profession?: string;
  medical_acts?: MedicalAct[];
  address?: string;
  email?: string;
  phone_number?: string;
  start_days?: number;
  end_days?: number;
}
