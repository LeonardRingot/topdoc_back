export interface planningTypes {
   
    td_dure_validite:number;
    td_date_debut: Date;
    td_date_fin: Date; 
    id_planning:number;
  }
  
  export interface planningId extends planningTypes {
  
    id: number;
  
  }