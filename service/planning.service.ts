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
    async findById(id: number): Promise<planningDTO | null> {
        const data:any = await this.planningRepository.findById(id)

        // Gesttion des congés
        const td_day = new Date()
        console.log('c passé ')
        if(
            td_day >= new Date(data.Conges[0].td_startDate) && td_day <= new Date(data.Conges[0].td_endDate))
            {
               const conge = {date:td_day, conge:true}
               console.log('praticien en congé')
            }
           
        else{
            //gestion des creneaux
            const minutesTotales = (data.Plage_Horaire[0].td_EndHour.getTime() - data.Plage_Horaire[0].td_StartHour.getTime())/(1000 * 60)
            const nbCreneaux = Math.floor(minutesTotales/data.Plage_Horaire[0].td_duree_horaire)
            console.log(minutesTotales)
            console.log("nbre de creneaux",nbCreneaux)
            const ListCreneux =[]
            for (let i =0; i < nbCreneaux;i++)
            {
                const StartHour = new Date(data.Plage_Horaire[0].td_StartHour.getTime()+ ((data.Plage_Horaire[0].td_duree_horaire * (1000  * 60))*i)).toLocaleTimeString()
                const EndHour = new Date(data.Plage_Horaire[0].td_StartHour.getTime()+ ((data.Plage_Horaire[0].td_duree_horaire * (1000  * 60))*(i+1))).toLocaleTimeString()

                const newCreneaux = {td_StartHour: StartHour, td_endHour:EndHour}
                ListCreneux.push(newCreneaux)
                console.log(ListCreneux)
            }
           
        }
                

            
        
        return this.planningRepository.findById(id)
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