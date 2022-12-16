import { IRepository } from "../core/repository.interface";
import { praticienDTO } from "../dto/praticien.dto";
import { Praticien } from "../models/praticien.model";
import { PraticienMapper } from "../mapper/praticien.mapper";

export class PraticienRepository implements IRepository<praticienDTO> {

    async findById(id: number): Promise<praticienDTO | null> {
        return Praticien.findByPk(id).then(praticien => PraticienMapper.mapToDto(praticien))
    }

    async findAll(): Promise<praticienDTO[]> {
        throw new Error("Method not implemented.");
    }

    create(t: praticienDTO): Promise<praticienDTO> {
        throw new Error("Method not implemented.");
    }

    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}