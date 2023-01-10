
export interface userDTO {
   td_lastname:string;
   td_firstname:string;
   td_birthday:Date;
   td_email: string;
   td_phone: number;
   td_isActif: boolean;
   }
   export interface userLoginDTO{
      id:number,
      td_email:string,
      td_password:string
   }