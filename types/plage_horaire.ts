export interface plageHoraireTypes {
  date: string;
    startHour: string;
    endHour: string;
    pauseStartHour: string;
    pauseEndHour: string;
    planningId:number
  }
export interface plageHoraire extends plageHoraireTypes {
    id: number;
}