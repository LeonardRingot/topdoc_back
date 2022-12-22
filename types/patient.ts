export interface patientTypes {
  PatientId: number;
    td_firstname: string;
    td_lastname: string;
    td_birthday: Date;
  }
  
  export interface patientId extends patientTypes {
  
    id: number;
  
  }