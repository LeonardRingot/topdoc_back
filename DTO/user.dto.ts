
export interface userDTO {
   lastname:string;
   firstname:string;
   birthday:Date;
   email: string;
   phone: number;
   isActif: boolean;
   }
   export interface userLoginDTO{
      UserId:number,
      email:string,
      password:string,
      role_nom:string
   }