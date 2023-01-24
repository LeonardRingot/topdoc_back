import { praticien } from "~~/database/mock-praticien";
import { planningDTO } from "../dto/planning.dto"
import { Planning } from "../models/planning.model";

export class PlanningMapper {
    static mapToDto(planning: Planning | null): planningDTO  {
        if (planning === null) return null as any;
        return {
            planning_name: planning.planning_name,
            startDate: planning.startDate,
            rdvDuration: planning.rdvDuration,
            validDuration: planning.validDuration,
        }
    }

    

}