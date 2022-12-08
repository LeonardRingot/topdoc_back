export interface rdvTypes {
    UserId: number;
    td_heure: Date;
    td_motif:string;
    td_duree_rdv:number;
  }
  
  export interface rdvId extends rdvTypes {
  
    id: number;
  
  }