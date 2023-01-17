import { plageHoraireDTO } from "../dto/plage_horaire.dto"
import { Plage_Horaire } from "../models/plage_horaire.model";

export class PlageHoraireMapper {
    static mapToDto(plage_horaire: Plage_Horaire | null): plageHoraireDTO  {
        if (plage_horaire === null) return null as any;
        return {
            td_day:plage_horaire.td_day,
            td_debut_jour:plage_horaire.td_debut_jour,
            td_fin_jour:plage_horaire.td_fin_jour,
            td_duree_horaire:plage_horaire.td_duree_horaire,
        }
    }

}