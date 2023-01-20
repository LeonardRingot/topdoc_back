export interface plageHoraireTypes {
  jour: string;
    StartHour: Date;
    EndHour: Date;
    duree_horaire:number,
    planningId:number
  }
export interface plageHoraire extends plageHoraireTypes {
    id: number;
}