import { IRepository } from "../core/repository.interface";
import { planningDTO } from "../dto/planning.dto";
import { Planning } from "../models/planning.model";
import { PlanningMapper } from "../mapper/planning.mapper";

export class PlanningRepository implements IRepository<planningDTO> {

    async findById(id: number): Promise<planningDTO | null> {
        return Planning.findByPk(id).then(planning => PlanningMapper.mapToDto(planning))
    }

    async findAll(): Promise<planningDTO[]> {
        throw new Error("Method not implemented.");
    }

    create(t: planningDTO): Promise<planningDTO> {
        throw new Error("Method not implemented.");
    }

    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}