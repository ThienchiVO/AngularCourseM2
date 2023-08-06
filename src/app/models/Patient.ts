export interface Patient {
  id: number;
  lastname: string;
  firstname: string;
  address?: string;
  address_details?: string;
  email?: string;
  phone_number?: string;
  notes?: string;
  pic?: Blob;
  social_security_number?: string;
  is_active?: boolean;
}
