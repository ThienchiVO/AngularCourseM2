import { Patient } from './Patient';
import { Practitioner } from './Practitioner';

export interface Contact {
  is_practicioner: boolean;
  user: Patient | Practitioner;
}
