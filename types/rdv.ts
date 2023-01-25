export interface rdvTypes {
    date: Date;
    motif:string;
    StartHour: Date;
    EndHour: Date;
    duree_rdv:number;
    PatientUserId: number;
    PraticienUserId: number;
    startHour: string
    endHour: string
}
export interface rdvId extends rdvTypes {
  id: number;
}