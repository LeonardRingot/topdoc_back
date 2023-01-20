export interface rdvTypes {
    date_rendez_vous: Date;
    motif:string;
    duree_rdv:number;
    PatientUserId: number;
    PraticienUserId: number;
}
export interface rdvId extends rdvTypes {
  id: number;
}