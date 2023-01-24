import { planningDTO } from "../dto/planning.dto";
import { IRepository } from "../core/repository.interface";
import { Planning } from "~~/models/planning.model";
import {IService} from "../core/service.interface"
import dayjs from "dayjs";

export class PlanningService implements IService<planningDTO> {

    private planningRepository: IRepository<planningDTO>;

    constructor(_planningRepository : IRepository<planningDTO>) {
        this.planningRepository = _planningRepository;
    }
    async findAll(): Promise<Array<planningDTO> | null> {
        return this.planningRepository.findAll()
    }
    async findById(id: number): Promise<planningDTO | null> {
        const data: any = await this.planningRepository.findById(id)

        for (let i = 0; i < data.Plage_Horaire.length; i++) {
            const startUnformattedData = data.Plage_Horaire[i].startHour.split(':')
            const startHours = parseInt(startUnformattedData[0])
            const startMinutes = parseInt(startUnformattedData[1])

            const endUnformattedData = data.Plage_Horaire[i].endHour.split(':')
            const endHours = parseInt(endUnformattedData[0])
            const endMinutes = parseInt(endUnformattedData[1])

            const start = dayjs().hour(startHours).minute(startMinutes)

            const minutesTotales = (((endHours * 60) + endMinutes) - ((startHours * 60) + startMinutes))
            const creneauxDuration = data.Planning.rdvDuration
            const nbCreneaux = minutesTotales / creneauxDuration

            const CreneauxList = []
            const PausesList = []
            const heureDebutPause = data.Plage_Horaire[i].pauseStartHour
            const heureFinPause = data.Plage_Horaire[i].pauseEndHour
            const date = data.Plage_Horaire[i].date

            for (let i = 0; i < nbCreneaux; i++) {
                const startHour = start.add(i * creneauxDuration, 'minute').format('HH:mm')
                const endHour = start.add((i + 1) * creneauxDuration, 'minute').format('HH:mm')
                const newCreneau = { date: date, startHour: startHour, endHour: endHour, taken: false }

                if (heureDebutPause <= startHour && heureFinPause > startHour) {
                    PausesList.push(newCreneau)
                }
                else {
                    for (let i = 0; i < data.Rdv.length; i++) {
                        if (data.Rdv[i].startHour <= newCreneau.startHour && 
                            data.Rdv[i].endHour >= newCreneau.endHour &&
                            data.Rdv[i].date.toDateString() == newCreneau.date.toDateString() ) {
                            newCreneau.taken = true
                            console.log('Rdv prévu:', newCreneau)
                        }
                    }
                    CreneauxList.push(newCreneau)
                }
            }
            const selectedDate = { jour: date, creneaux: CreneauxList, pauses: PausesList }
            console.log(selectedDate)
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