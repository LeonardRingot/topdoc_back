import { plageHoraireDTO } from "../dto/plage_horaire.dto"
import { Plage_Horaire } from "../models/plage_horaire.model";

export class PlageHoraireMapper {
    static mapToDto(plage_horaire: Plage_Horaire | null): plageHoraireDTO  {
        if (plage_horaire === null) return null as any;
        return {

            date:plage_horaire.date,
            StartHour:plage_horaire.StartHour,
            EndHour:plage_horaire.EndHour,
            pauseStartHour:plage_horaire.pauseStartHour,
            pauseEndHour:plage_horaire.pauseEndHour,
            duree_horaire:plage_horaire.duree_horaire,

        
        }
    }

}