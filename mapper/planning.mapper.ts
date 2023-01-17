import { praticien } from "~~/database/mock-praticien";
import { planningDTO } from "../dto/planning.dto"
import { Planning } from "../models/planning.model";

export class PlanningMapper {
    static mapToDto(planning: Planning | null): planningDTO  {
        if (planning === null) return null as any;
        return {
            td_planning_name: planning.td_planning_name,
            td_date_debut: planning.td_date_debut,
            td_date_fin: planning.td_date_fin,
        }
    }

    

}