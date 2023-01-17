export interface plageHoraireTypes {
    td_day: string;
    td_debut_jour: Date;
    td_fin_jour: Date;
    td_duree_horaire:number,
    planningId:number
  }
export interface plageHoraire extends plageHoraireTypes {
    id: number;
}