export interface userTypes {
  td_email: string;
  td_phone: number;
  td_isActif: boolean;
  td_password: string;
    LocalisationId: number;
  }
  
  
  export interface userId extends userTypes {
  
    id: number;
  
  }
  
  
  export interface User {
    td_username: string;
    td_password: string;
  }
  
  declare global {
    namespace Express {
      interface Request {
        headers?: Headers;
        body?: Body;
        user?: User;
      }
    }
  }