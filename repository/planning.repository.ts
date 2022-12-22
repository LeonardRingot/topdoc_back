import { IRepository } from "../core/repository.interface";
import { planningDTO } from "../dto/planning.dto";
import { Planning } from "../models/planning.model";
import { PlanningMapper } from "../mapper/planning.mapper";

export class PlanningRepository implements IRepository<planningDTO> {
    async findById(id: number): Promise<planningDTO | null> {
        return Planning.findByPk(id).then((data:Planning | null) =>{
            return PlanningMapper.mapToDto(data)
        })
    }

    async findAll(): Promise<Array<planningDTO>> {
        return Planning.findAll().then((data:Array<Planning>) =>{
            return data.map((user:Planning)=>{
                return PlanningMapper.mapToDto(user)
            })
        })
    }

    async  create(body: Partial<Planning>): Promise<planningDTO> {
        return Planning.create(body).then((data:Planning)=>{
             return PlanningMapper.mapToDto(data)
        })
     }

    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}