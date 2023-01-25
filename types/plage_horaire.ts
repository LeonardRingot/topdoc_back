export interface plageHoraireTypes {
  jour: Date;
    StartHour: Date;
    EndHour: Date;
    pauseStart:Date;
    pauseEnd:Date;
    duree_horaire:number,
    planningId:number
  }
export interface plageHoraire extends plageHoraireTypes {
    id: number;
}