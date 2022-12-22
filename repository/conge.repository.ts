import { IRepository } from "../core/repository.interface";
import { congeDTO } from "../dto/conge.dto";
import { Conge } from "../models/conge.model";
import { CongeMapper } from "../mapper/conge.mapper";

export class CongeRepository implements IRepository<congeDTO> {

    async findById(id: number): Promise<congeDTO | null> {
        return Conge.findByPk(id).then((data:Conge | null) =>{
            return CongeMapper.mapToDto(data)
        })
    }

    async findAll(): Promise<Array<congeDTO>> {
        return Conge.findAll().then((data:Array<Conge>) =>{
            return data.map((conge:Conge)=>{
                return CongeMapper.mapToDto(conge)
            })
        })
    }

    async  create(body: Partial<Conge>): Promise<congeDTO> {
        return Conge.create(body).then((data:Conge)=>{
             return CongeMapper.mapToDto(data)
        })
     }

    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}