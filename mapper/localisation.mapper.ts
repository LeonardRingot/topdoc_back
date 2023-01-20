import { LocalisationDTO } from "../dto/localisation.dto"
import { Localisation } from "../models/localisation.model";

export class LocalisationMapper {
    static mapToDto(localisation: Localisation | null): LocalisationDTO  {
        if (localisation === null) return null as any;
        return {
            address: localisation.address,
            zipCode: localisation.zipCode,
            city: localisation.city
        }
    }

    static mapAllToDto(localisations: Localisation[]): LocalisationDTO[] {
        return localisations.map(localisation => {
            return  {
                address: localisation.address,
                zipCode: localisation.zipCode,
                city: localisation.city
            }
        })
    }

}