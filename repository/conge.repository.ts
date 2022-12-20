import { IRepository } from "../core/repository.interface";
import { congeDTO } from "../dto/conge.dto";
import { Conge } from "../models/conge.model";
import { CongeMapper } from "../mapper/conge.mapper";

export class CongeRepository implements IRepository<congeDTO> {

    async findById(id: number): Promise<congeDTO | null> {
        return Conge.findByPk(id).then(conge => CongeMapper.mapToDto(conge))
    }

    async findAll(): Promise<congeDTO[]> {
        throw new Error("Method not implemented.");
    }

    create(t: congeDTO): Promise<congeDTO> {
        throw new Error("Method not implemented.");
    }

    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}