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
        
        /*const data : any = await this.planningRepository.findById(id)
        console.log('nouvelles', data)
        // Congés 
        

        const td_day = new Date()

        if (td_day >= new Date(data.Conge[0].td_debut_conge) && td_day <= new Date(data.Conge[0].td_fin_conge)) {
            console.log('IL EST EN CONGE')
            const holiday = {date: td_day, holiday: true}
        }
        else {

            // Créneaux
            
            const minutesTotales = (data.Plage_Horaire[0].td_fin_jour.getTime() - data.Plage_Horaire[0].td_debut_jour.getTime()) / (1000 * 60)
            const nbCreneaux = Math.floor(minutesTotales / data.Plage_Horaire[0].td_duree_horaire)
    
            const CreneauxList = []
            
            for (let i = 0; i < nbCreneaux; i++) {
                const td_debut_jour = new Date(data.Plage_Horaire[0].td_debut_jour.getTime() + ((data.Plage_Horaire[0].td_duree_horaire * (1000 * 60)) * i)).toLocaleTimeString()
                const td_fin_jour = new Date(data.Plage_Horaire[0].td_debut_jour.getTime() + ((data.Plage_Horaire[0].td_duree_horaire * (1000 * 60)) * (i + 1))).toLocaleTimeString()
                
                const newCreneau = {td_debut_jour: td_debut_jour, td_fin_jour: td_fin_jour}
    
                CreneauxList.push(newCreneau)
               
            }

            const selectedDate = {jour: data.Plage_Horaire[0].td_day, creneaux: CreneauxList}
        }
*/
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