export interface rdvTypes {
  
    td_date_rendez_vous: Date;
    td_motif:string;
    td_duree_rdv:number;
    PatientUserId: number;
    PraticienUserId: number;
  }
  
  export interface rdvId extends rdvTypes {
  
    id: number;
  
  }