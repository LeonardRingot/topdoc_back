import { rdvDTO } from "../dto/rdv.dto"
import { Rdv } from "../models/rdv.model";

export class RdvMapper {
    static mapToDto(rdv: Rdv | null): rdvDTO  {
        if (rdv === null) return null as any;
        return {
            date_rendez_vous:rdv.date_rendez_vous,
            duree_rdv:rdv.duree_rdv,
            motif:rdv.motif,
           
        }
    }

    static mapAllToDto(Rdvs: Rdv[]): rdvDTO[] {
        return Rdvs.map(rdv => {
            return  {
                date_rendez_vous: rdv.date_rendez_vous,
                duree_rdv: rdv.duree_rdv,
                motif: rdv.motif,
            }
        })
    }

}