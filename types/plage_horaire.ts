export interface plageHoraireTypes {
    td_day: string;
    td_StartHour: Date;
    td_EndHour: Date;
    td_duree_horaire:number,
    planningId:number
  }
export interface plageHoraire extends plageHoraireTypes {
    id: number;
}