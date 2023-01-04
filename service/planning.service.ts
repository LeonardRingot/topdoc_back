import { planningDTO } from "../dto/planning.dto";
import { IRepository } from "../core/repository.interface";
import { Planning } from "~~/models/planning.model";

export class PlanningService {

    private planningRepository: IRepository<planningDTO>;

    constructor(_planningRepository : IRepository<planningDTO>) {
        this.planningRepository = _planningRepository;
    }
    async findAll(): Promise<planningDTO[]> {
        return this.planningRepository.findAll()
    }
    async findById(id: number): Promise<planningDTO | null>{
        return this.planningRepository.findById(id).then(planningDTO => {
            if (planningDTO === null) return null;
            return planningDTO;
        });
    }
    async create(localisation:Planning):Promise<planningDTO | null>{
        return this.planningRepository.create(localisation).then((data) =>{
            return data
        })
    }
    async delete(id:number):Promise<boolean | number> {
        return this.planningRepository.delete(id)
    }
    async update(planning :Planning, id:number ):  Promise<boolean | number | undefined>{
        return this.planningRepository.update(planning, id)
    }

}