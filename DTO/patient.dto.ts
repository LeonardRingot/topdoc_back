export interface PatientDTO {
  UserId:number;
    numbervitalCode: string;
    lastname:string;
    firstname:string;
    birthday:Date;
    email: string;
    phone: number;
    isActif: boolean;
    password: string;   
    address: string;
    zipCode: number;
    city: string; 
    role_nom:string | null;
  }