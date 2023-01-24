import { plageHoraireDTO } from "../dto/plage_horaire.dto"
import { Plage_Horaire } from "../models/plage_horaire.model";

export class PlageHoraireMapper {
    static mapToDto(plage_horaire: Plage_Horaire | null): plageHoraireDTO  {
        if (plage_horaire === null) return null as any;
        return {
            date:plage_horaire.date,
            startHour:plage_horaire.startHour,
            endHour:plage_horaire.endHour,
            pauseStartHour:plage_horaire.pauseStartHour,
            pauseEndHour:plage_horaire.pauseEndHour,
        }
    }

}