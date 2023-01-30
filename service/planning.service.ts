import { planningDTO } from "../dto/planning.dto";
import { IRepository } from "../core/repository.interface";
import { Planning } from "~~/models/planning.model";
import {IService} from "../core/service.interface"

export class PlanningService implements IService<planningDTO> {

    private planningRepository: IRepository<planningDTO>;

    constructor(_planningRepository : IRepository<planningDTO>) {
        this.planningRepository = _planningRepository;
    }
    async findAll(): Promise<Array<planningDTO> | null> {
        return this.planningRepository.findAll()
    }
    async findById(id: number): Promise<any | null> {
        const data:any = await this.planningRepository.findById(id)
        const planning =[]; 
        for (let i =0; i < data.Plage_Horaire.length;i++)
        {
            /*On parcoure les pages horaires et on calcule le nbre de creneaux pour chaque plage horaire
            */
            const minutesTotales = (data.Plage_Horaire[i].EndHour.getTime() - data.Plage_Horaire[i].StartHour.getTime())/(1000 * 60)
            const nbCreneaux = Math.floor(minutesTotales/data.Plage_Horaire[i].duree_horaire)
            const HourStartPause = data.Plage_Horaire[i].pauseStartHour
            const HourEndPause = data.Plage_Horaire[i].pauseEndHour
            const date = data.Plage_Horaire[i].date
            const ListCreneux =[]
            const PauseList =[]
            console.log("nbre de creneaux",nbCreneaux)
            for (let a =0; a < nbCreneaux;a++)
            {
                /* boucle pour pour créer des objets de créneau horaire pour chaque créneau disponible.
                 Il vérifie ensuite si un rendez-vous existe déjà pour chaque créneau horaire*/
                const StartHour = new Date(data.Plage_Horaire[i].StartHour.getTime()+ ((data.Plage_Horaire[i].duree_horaire * (1000  * 60))*a))
                const EndHour = new Date(data.Plage_Horaire[i].StartHour.getTime()+ ((data.Plage_Horaire[i].duree_horaire * (1000  * 60))*(a+1)))
                const newCreneaux = {date:date, StartHour: StartHour, EndHour:EndHour, Rdvpris:false}
                console.log('debut pause',HourStartPause)
                console.log('fin pause',HourEndPause)
                console.log('start hour',StartHour )
                console.log("nouveaux creneaux,", newCreneaux)
                if(HourStartPause <= StartHour && HourEndPause > StartHour)
                {
                    PauseList.push(newCreneaux)
                    console.log('nouveaux crenaux', newCreneaux)
                    console.log('liste des pause',PauseList)
                }else
                {
                    for (let k =0 ; k < data.Rdv.length ;k++){
                        if (data.Rdv[k].StartHour <= newCreneaux.StartHour && data.Rdv[k].EndHour >= newCreneaux.EndHour && 
                            data.Rdv[k].date.getTime() == newCreneaux.date.getTime()) {
                            newCreneaux.Rdvpris = true
                            console.log('rdv de prevu', newCreneaux)
                        }

                    }
                    ListCreneux.push(newCreneaux)
            }
        }

        const selectedData = {jour:date, creneaux:ListCreneux, pauses:PauseList}    
        planning.push(selectedData)
       
    }
        return planning
    }
    async create(localisation:Planning):Promise<planningDTO | null>{
        return this.planningRepository.create(localisation).then((data) =>{
            return data
        })
    }
    async delete(id:number):Promise<boolean | number> {
        return this.planningRepository.delete(id)
    }
    async update(planning :Planning, id:number ):  Promise<boolean | number >{
        return this.planningRepository.update(planning, id)
    }
}