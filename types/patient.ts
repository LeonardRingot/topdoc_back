export interface patientTypes {
  PatientId: number;
  td_lastname:string;
  td_firstname:string;
  td_birthday: Date;
 td_email: string;
 td_phone: number;
 td_isActif: boolean;
 td_password: string;
   LocalisationId: number;
    td_patient: string;
    
  }
  
  export interface patientId extends patientTypes {
  
    id: number;
  
  }