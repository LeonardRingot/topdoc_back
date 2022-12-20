import { plageHoraireDTO } from "../dto/plage_horaire.dto"
import { Plage_Horaire } from "../models/plage_horaire.model";

export class PlageHoraireMapper {
    static mapToDto(plage_horaire: Plage_Horaire | null): plageHoraireDTO | null {
        if (plage_horaire === null) return null;
        return {
            PlanningId:plage_horaire.PlanningId,
            td_jour:plage_horaire.td_jour,
            td_debut_jour:plage_horaire.td_debut_jour,
            td_fin_jour:plage_horaire.td_fin_jour,
            td_duree_horaire:plage_horaire.td_duree_horaire,
        }
    }

    static mapAllToDto(plage_horaires: Plage_Horaire[]): plageHoraireDTO[] {
        return plage_horaires.map(plage_horaire => {
            return  {
                PlanningId:plage_horaire.PlanningId,
                td_jour:plage_horaire.td_jour,
                td_debut_jour:plage_horaire.td_debut_jour,
                td_fin_jour:plage_horaire.td_fin_jour,
                td_duree_horaire: plage_horaire.td_duree_horaire,
            }
        })
    }

}