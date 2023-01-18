export interface praticienDTO {
  UserId:number;
    td_activite: string;
    td_lastname:string;
    td_firstname:string;
    td_birthday:Date;
    td_email: string;
    td_phone: number;
    td_isActif: boolean;
    td_password: string; 
    td_address: string;
    td_zipCode: number;
    td_city: string;
    td_role_nom:string | null;
  }