export interface plageHoraireTypes {
<<<<<<< HEAD
  jour: Date;
    StartHour: Date;
    EndHour: Date;
    pauseStart:Date;
    pauseEnd:Date;
    duree_horaire:number,
=======
  date: string;
    startHour: string;
    endHour: string;
    pauseStartHour: string;
    pauseEndHour: string;
>>>>>>> bb5ac0482451c8167aa80e629380b973acfd336e
    planningId:number
  }
export interface plageHoraire extends plageHoraireTypes {
    id: number;
}