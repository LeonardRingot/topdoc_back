import { plageHoraireDTO } from "../dto/plage_horaire.dto"
import { Plage_Horaire } from "../models/plage_horaire.model";

export class PlageHoraireMapper {
    static mapToDto(plage_horaire: Plage_Horaire | null): plageHoraireDTO  {
        if (plage_horaire === null) return null as any;
        return {
<<<<<<< HEAD
            jour:plage_horaire.jour,
            StartHour:plage_horaire.StartHour,
            EndHour:plage_horaire.EndHour,
            pauseStart:plage_horaire.pauseStart,
            pauseEnd:plage_horaire.pauseEnd,
            duree_horaire:plage_horaire.duree_horaire,
=======
            date:plage_horaire.date,
            startHour:plage_horaire.startHour,
            endHour:plage_horaire.endHour,
            pauseStartHour:plage_horaire.pauseStartHour,
            pauseEndHour:plage_horaire.pauseEndHour,
>>>>>>> bb5ac0482451c8167aa80e629380b973acfd336e
        }
    }

}