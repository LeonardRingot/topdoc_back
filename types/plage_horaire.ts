export interface plageHoraireTypes {
    td_jour: number;
    td_debut_jour: Date;
    td_fin_jour: Date;
    td_duree_horaire:number,
    PlanningId: number;
  }
export interface plageHoraire extends plageHoraireTypes {
    id: number;
}