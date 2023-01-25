import { plageHoraireDTO } from "../dto/plage_horaire.dto"
import { Plage_Horaire } from "../models/plage_horaire.model";

export class PlageHoraireMapper {
    static mapToDto(plage_horaire: Plage_Horaire | null): plageHoraireDTO  {
        if (plage_horaire === null) return null as any;
        return {

            jour:plage_horaire.jour,
            StartHour:plage_horaire.StartHour,
            EndHour:plage_horaire.EndHour,
            pauseStart:plage_horaire.pauseStart,
            pauseEnd:plage_horaire.pauseEnd,
            duree_horaire:plage_horaire.duree_horaire,

        
        }
    }

}