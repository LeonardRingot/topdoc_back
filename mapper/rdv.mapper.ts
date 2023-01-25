import { rdvDTO } from "../dto/rdv.dto"
import { Rdv } from "../models/rdv.model";

export class RdvMapper {
    static mapToDto(rdv: Rdv | null): rdvDTO  {
        if (rdv === null) return null as any;
        return {
            date:rdv.date,
<<<<<<< HEAD
            StartHour:rdv.StartHour,
            EndHour:rdv.EndHour,
            duree_rdv:rdv.duree_rdv,
=======
            startHour:rdv.startHour,
            endHour:rdv.endHour,
>>>>>>> bb5ac0482451c8167aa80e629380b973acfd336e
            motif:rdv.motif,
           
        }
    }

    static mapAllToDto(Rdvs: Rdv[]): rdvDTO[] {
        return Rdvs.map(rdv => {
            return  {
                date: rdv.date,
<<<<<<< HEAD
                StartHour:rdv.StartHour,
                EndHour:rdv.EndHour,
                duree_rdv: rdv.duree_rdv,
=======
                startHour:rdv.startHour,
            endHour:rdv.endHour,
>>>>>>> bb5ac0482451c8167aa80e629380b973acfd336e
                motif: rdv.motif,
            }
        })
    }

}