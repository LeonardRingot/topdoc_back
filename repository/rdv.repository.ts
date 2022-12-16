import { IRepository } from "../core/repository.interface";
import { rdvDTO } from "../dto/rdv.dto";
import { Rdv } from "../models/rdv.model";
import { RdvMapper } from "../mapper/rdv.mapper";

export class AppointementRepository implements IRepository<rdvDTO> {

    async findById(id: number): Promise<rdvDTO | null> {
        return Rdv.findByPk(id).then(rdv => RdvMapper.mapToDto(rdv))
    }

    async findAll(): Promise<rdvDTO[]> {
        throw new Error("Method not implemented.");
    }

    create(t: rdvDTO): Promise<rdvDTO> {
        throw new Error("Method not implemented.");
    }

    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}