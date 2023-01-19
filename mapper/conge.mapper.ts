import { congeDTO } from "../dto/conge.dto"
import { Conge } from "../models/conge.model";

export class CongeMapper {
    static mapToDto(conge: Conge | null): congeDTO  {
        if (conge === null) return null as any;
        return {
            td_startDate: conge.td_startDate,
            td_endDate: conge.td_endDate,
        }
    }
}