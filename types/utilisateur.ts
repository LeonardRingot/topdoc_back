export interface userTypes {
  lastname:string;
  firstname:string;
  birthday: Date;
  email: string;
  phone: number;
  isActif: boolean;
  password: string;
  LocalisationId: number;
}
export interface userId extends userTypes {
    id: number;
}
