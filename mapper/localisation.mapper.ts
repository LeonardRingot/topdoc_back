import { LocalisationDTO } from "../dto/localisation.dto"
import { Localisation } from "../models/localisation.model";

export class LocalisationMapper {
    static mapToDto(localisation: Localisation | null): LocalisationDTO  {
        if (localisation === null) return null as any;
        return {
            td_address: localisation.td_address,
            td_zipCode: localisation.td_zipCode,
            td_city: localisation.td_city
        }
    }

    static mapAllToDto(localisations: Localisation[]): LocalisationDTO[] {
        return localisations.map(localisation => {
            return  {
                td_address: localisation.td_address,
                td_zipCode: localisation.td_zipCode,
                td_city: localisation.td_city
            }
        })
    }

}