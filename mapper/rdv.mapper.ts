import { rdvDTO } from "../dto/rdv.dto"
import { Rdv } from "../models/rdv.model";

export class RdvMapper {
    static mapToDto(rdv: Rdv | null): rdvDTO  {
        if (rdv === null) return null as any;
        return {
            date:rdv.date,
            StartHour:rdv.StartHour,
            EndHour:rdv.EndHour,
            duree_rdv:rdv.duree_rdv,
            motif:rdv.motif,
           
        }
    }

    static mapAllToDto(Rdvs: Rdv[]): rdvDTO[] {
        return Rdvs.map(rdv => {
            return  {
                date: rdv.date,
                StartHour:rdv.StartHour,
            EndHour:rdv.EndHour,
            duree_rdv:rdv.duree_rdv,
                motif: rdv.motif,
            }
        })
    }

}