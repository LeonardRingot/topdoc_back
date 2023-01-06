
export interface userDTO {
   td_lastname:string;
   td_firstname:string;
   td_birthday:Date;
   td_email: string;
   td_phone: number;
   td_isActif: boolean;
   }
   export interface userDTOPassword extends userDTO{
      UserId:number,
      td_password:string
   }