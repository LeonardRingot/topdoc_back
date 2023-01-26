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

        // Gesttion des congés
        const planning =[]; 
        for (let i =0; i < data.Plage_Horaire.length;i++)
        {
            const minutesTotales = (data.Plage_Horaire[0].EndHour.getTime() - data.Plage_Horaire[0].StartHour.getTime())/(1000 * 60)
            console.log(minutesTotales)
            const nbCreneaux = Math.floor(minutesTotales/data.Plage_Horaire[0].duree_horaire)
            const HourStartPause = data.Plage_Horaire[i].pauseStartHour
            const HourEndPause = data.Plage_Horaire[i].pauseEndHour
            const date = data.Plage_Horaire[i].date
            const ListCreneux =[]
            const PauseList =[]
            console.log(nbCreneaux)
            for (let i =0; i < nbCreneaux;i++)
            {
                const StartHour = new Date(data.Plage_Horaire[0].StartHour.getTime()+ ((data.Plage_Horaire[0].duree_horaire * (1000  * 60))*i)).toLocaleTimeString()
                const EndHour = new Date(data.Plage_Horaire[0].StartHour.getTime()+ ((data.Plage_Horaire[0].duree_horaire * (1000  * 60))*(i+1))).toLocaleTimeString()
                const newCreneaux = {date:date, StartHour: StartHour, endHour:EndHour, Rdvpris:false}
                console.log(newCreneaux)
                console.log(HourEndPause)
                console.log(HourStartPause)
                if(HourStartPause < StartHour && HourEndPause >StartHour)
                {
                    PauseList.push(newCreneaux)
                    console.log(PauseList)
                }else
                {
                    for (let i =0 ; i<data.Rdv.length;i++){
                        if(data.Rdv[i].StartHour <= newCreneaux.StartHour && data.Rdv[i].EndHour >= newCreneaux.endHour && 
                        data.Rdv[i].date.toDateString()== newCreneaux.date.toDateString()){
                            console.log('test3')
                            newCreneaux.Rdvpris = true
                            console.log('rdv de prevu', newCreneaux)
                        }

                    }
                    ListCreneux.push(newCreneaux)
            }
        }

        const selectedData = {jour:date, creneaux:ListCreneux, pauses:PauseList}  
        planning.push(selectedData)
        console.log('OUAAIIII', planning)
       
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