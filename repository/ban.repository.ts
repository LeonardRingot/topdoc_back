import { IRepository } from "../core/repository.interface";
import { bansDTO } from "../dto/ban.dto";
import { Ban } from "../models/ban.model";
import { BanMapper } from "../mapper/ban.mapper";

export class BanRepository implements IRepository<bansDTO> {

    async findById(id: number): Promise<bansDTO | null> {
        return Ban.findByPk(id).then(ban => BanMapper.mapToDto(ban))
    }

    async findAll(): Promise<bansDTO[]> {
        throw new Error("Method not implemented.");
    }

    create(t: bansDTO): Promise<bansDTO> {
        throw new Error("Method not implemented.");
    }

    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}