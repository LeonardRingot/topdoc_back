import { praticienDTO } from "../dto/praticien.dto"
import { Praticien } from "../models/praticien.model";

export class PraticienMapper {
    static mapToDto(praticien: Praticien | null): praticienDTO | null {
        if (praticien === null) return null;
        return {
            UserId:praticien.UserId,
            td_activite: praticien.td_activite,
        }
    }

    static mapAllToDto(Praticiens: Praticien[]): praticienDTO[] {
        return Praticiens.map(praticien => {
            return  {
                UserId:praticien.UserId,
                td_activite: praticien.td_activite,
            }
        })
    }

}