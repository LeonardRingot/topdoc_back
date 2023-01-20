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
        const jour = new Date()
        console.log('c passé ')
        if(
            //Verifie si la date actuelle se situe dans une plage d'une date de debut et date de fin stocké dans un tableau 
            //data.conges[0],si c'est le cas il crée un objet congé avec la date actuelle 
            jour >= new Date(data.Conges[0].startDate) && jour <= new Date(data.Conges[0].endDate))
            {
               const conge = {date:jour, conge:true}
               console.log('praticien en congé')
            }
           
        else{
            //gestion des creneaux
            /*
            Sinon calcule le nb minutes totales entre le debut et la fin d'une journée stocké dans un array data.PlageHoraire[0]
            Ensuite il calcule le nombre de creneau qui peut etre réalisé dans la range divisé par les minutes totales par la durée de chaque 
            duré 
            Création d'une boucle pour parcourir le nmbre de creneaux, pour chaque iteration il crée un objet avec l'heure de debut 
            et l'heure de fin de ce creneau et le stock un tableau listCreneaux
            */
            const minutesTotales = (data.Plage_Horaire[0].EndHour.getTime() - data.Plage_Horaire[0].StartHour.getTime())/(1000 * 60)
            const nbCreneaux = Math.floor(minutesTotales/data.Plage_Horaire[0].duree_horaire)
            console.log(minutesTotales)
            console.log("nbre de creneaux",nbCreneaux)
            const ListCreneux =[]
            for (let i =0; i < nbCreneaux;i++)
            {
                const StartHour = new Date(data.Plage_Horaire[0].StartHour.getTime()+ ((data.Plage_Horaire[0].duree_horaire * (1000  * 60))*i)).toLocaleTimeString()
                const EndHour = new Date(data.Plage_Horaire[0].StartHour.getTime()+ ((data.Plage_Horaire[0].duree_horaire * (1000  * 60))*(i+1))).toLocaleTimeString()

                const newCreneaux = {StartHour: StartHour, endHour:EndHour}
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