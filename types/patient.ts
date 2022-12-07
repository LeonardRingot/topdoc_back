export interface patientTypes {
    UserId: number;
    firstname: string;
    lastname: string;
    birthday: Date;
  }
  
  export interface patientId extends patientTypes {
  
    id: number;
  
  }