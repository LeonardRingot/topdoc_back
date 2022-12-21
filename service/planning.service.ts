import { planningDTO } from "../dto/planning.dto";
import { IRepository } from "../core/repository.interface";

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

}