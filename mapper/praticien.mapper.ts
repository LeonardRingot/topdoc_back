import { praticienDTO } from "../dto/praticien.dto"
import { Praticien } from "../models/praticien.model";

export class PraticienMapper {
    static mapToDto(praticien: Praticien | null): praticienDTO {
        if (praticien === null) return null as any;
        return {
           // UserId:praticien.UserId,
            td_activite: praticien.td_activite,
        }
    }

    static mapAllToDto(Praticiens: Praticien[]): praticienDTO[] {
        return Praticiens.map(praticien => {
            return  {
               // UserId:praticien.UserId,
                td_activite: praticien.td_activite,
            }
        })
    }

}