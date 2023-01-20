import { congeDTO } from "../dto/conge.dto"
import { Conge } from "../models/conge.model";

export class CongeMapper {
    static mapToDto(conge: Conge | null): congeDTO  {
        if (conge === null) return null as any;
        return {
            startDate: conge.startDate,
            endDate: conge.endDate,
        }
    }
}