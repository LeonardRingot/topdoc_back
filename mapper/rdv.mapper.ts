import { rdvDTO } from "../dto/rdv.dto"
import { Rdv } from "../models/rdv.model";

export class RdvMapper {
    static mapToDto(rdv: Rdv | null): rdvDTO | null {
        if (rdv === null) return null;
        return {
            td_date_rendez_vous:rdv.td_date_rendez_vous,
            td_duree_rdv:rdv.td_duree_rdv,
            td_motif:rdv.td_motif,
           
        }
    }

    static mapAllToDto(Rdvs: Rdv[]): rdvDTO[] {
        return Rdvs.map(rdv => {
            return  {
                td_date_rendez_vous: rdv.td_date_rendez_vous,
                td_duree_rdv: rdv.td_duree_rdv,
                td_motif: rdv.td_motif,
            }
        })
    }

}