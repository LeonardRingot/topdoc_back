import { planningDTO } from "../dto/planning.dto"
import { Planning } from "../models/planning.model";

export class PlanningMapper {
    static mapToDto(planning: Planning | null): planningDTO  {
        if (planning === null) return null as any;
        return {
            td_dure_validite: planning.td_dure_validite,
            td_date_debut: planning.td_date_debut,
            td_date_fin: planning.td_date_fin,
            id_planning:planning.id_planning,
        }
    }

    static mapAllToDto(Plannings: Planning[]): planningDTO[] {
        return Plannings.map(planning => {
            return  {
                td_dure_validite: planning.td_dure_validite,
            td_date_debut: planning.td_date_debut,
            td_date_fin: planning.td_date_fin,
            id_planning:planning.id_planning,
            }
        })
    }

}