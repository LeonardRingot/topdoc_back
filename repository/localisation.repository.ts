import { IRepository } from "../core/repository.interface";
import { LocalisationDTO } from "../dto/localisation.dto";
import { Localisation } from "../models/localisation.model";
import { LocalisationMapper } from "../mapper/localisation.mapper";

export class LocalisationRepository implements IRepository<LocalisationDTO> {

    async findById(id: number): Promise<LocalisationDTO | null> {
        return Localisation.findByPk(id).then(localisation => LocalisationMapper.mapToDto(localisation))
    }

    async findAll(): Promise<LocalisationDTO[]> {
        throw new Error("Method not implemented.");
    }

    create(t: LocalisationDTO): Promise<LocalisationDTO> {
        throw new Error("Method not implemented.");
    }

    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}