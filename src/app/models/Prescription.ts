export interface Prescription {
  id?: number;
  patient_id?: number;
  practitioner_id?: number;
  session_count?: number;
  date?: Date;
  pathology_id?: Pathology;
  prescription_by?: string;
}

export interface Pathology {
  id?: number;
  label?: string;
}
