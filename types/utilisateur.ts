export interface userTypes {
  //UserId: number;
  td_lastname:string;
  td_firstname:string;
  td_birthday: Date;
  td_email: string;
  td_phone: number;
  td_isActif: boolean;
  td_password: string;
  LocalisationId: number;
}
export interface userId extends userTypes {
    id: number;
}
