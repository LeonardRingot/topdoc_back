import { IRepository } from "../core/repository.interface";
import { plageHoraireDTO } from "../dto/plage_horaire.dto";
import { Plage_Horaire } from "../models/plage_horaire.model";
import { PlageHoraireMapper } from "../mapper/plage_horaire.mapper";

export class PlageHoraireRepository implements IRepository<plageHoraireDTO> {

    async findById(id: number): Promise<plageHoraireDTO | null> {
        return Plage_Horaire.findByPk(id).then(plage_horaire => PlageHoraireMapper.mapToDto(plage_horaire))
    }

    async findAll(): Promise<plageHoraireDTO[]> {
        throw new Error("Method not implemented.");
    }

    create(t: plageHoraireDTO): Promise<plageHoraireDTO> {
        throw new Error("Method not implemented.");
    }

    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}