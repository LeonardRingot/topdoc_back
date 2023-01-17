import { congeDTO } from "../dto/conge.dto"
import { Conge } from "../models/conge.model";

export class CongeMapper {
    static mapToDto(conge: Conge | null): congeDTO  {
        if (conge === null) return null as any;
        return {
            td_debut_conge: conge.td_debut_conge,
            td_fin_conge: conge.td_fin_conge,
        }
    }
}