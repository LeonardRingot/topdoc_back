import { plageHoraireDTO } from "../dto/plage_horaire.dto"
import { Plage_Horaire } from "../models/plage_horaire.model";

export class PlageHoraireMapper {
    static mapToDto(plage_horaire: Plage_Horaire | null): plageHoraireDTO  {
        if (plage_horaire === null) return null as any;
        return {
            td_day:plage_horaire.td_day,
            td_StartHour:plage_horaire.td_StartHour,
            td_EndHour:plage_horaire.td_EndHour,
            td_duree_horaire:plage_horaire.td_duree_horaire,
        }
    }

}