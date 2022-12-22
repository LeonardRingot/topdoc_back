import { congeDTO } from "../dto/conge.dto"
import { Conge } from "../models/conge.model";

export class CongeMapper {
    static mapToDto(conge: Conge | null): congeDTO  {
        if (conge === null) return null as any;
        return {
           UserId:conge.id,
            td_debut_conge: conge.td_debut_conge,
            td_fin_conge: conge.td_fin_conge,
        }
    }

    static mapAllToDto(conges: Conge[]): congeDTO[] {
        return conges.map(conge => {
            return  {
                UserId:conge.id,
                td_debut_conge: conge.td_debut_conge,
                td_fin_conge: conge.td_fin_conge,
            }
        })
    }

}