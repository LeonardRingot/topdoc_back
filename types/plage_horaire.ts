export interface plageHoraireTypes {
  date: string;
    StartHour: Date;
    EndHour: Date;
    pauseStartHour: Date;
    pauseEndHour: Date;
    planningId:number
  }
export interface plageHoraire extends plageHoraireTypes {
    id: number;
}