import { praticien } from "~~/database/mock-praticien";
import { planningDTO } from "../dto/planning.dto"
import { Planning } from "../models/planning.model";

export class PlanningMapper {
    static mapToDto(planning: Planning | null): planningDTO  {
        if (planning === null) return null as any;
        return {
            td_planning_name: planning.td_planning_name,
            td_startDate: planning.td_startDate,
            td_endDate: planning.td_endDate,
        }
    }

    

}