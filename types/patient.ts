export interface patientTypes {
  PatientId: number;
   LocalisationId: number;
   td_numbervitalCode: string;
    UserId: number;
  }
  
  export interface patientId extends patientTypes {
  
    id: number;
  
  }