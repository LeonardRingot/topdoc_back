import { IRepository } from "../core/repository.interface";
import { LocalisationDTO } from "../dto/localisation.dto";
import { Localisation } from "../models/localisation.model";
import { LocalisationMapper } from "../mapper/localisation.mapper";

export class LocalisationRepository implements IRepository<LocalisationDTO> {

    async findById(id: number): Promise<LocalisationDTO | null> {
        return Localisation.findByPk(id).then((data:Localisation | null) =>{
            return LocalisationMapper.mapToDto(data)
        })
    }

    async findAll(): Promise<Array<LocalisationDTO>> {
        return Localisation.findAll().then((data:Array<Localisation>) =>{
            return data.map((data:Localisation)=>{
                return LocalisationMapper.mapToDto(data)
            })
        })
    }

    async  create(body: Partial<Localisation>): Promise<LocalisationDTO> {
        return Localisation.create(body).then((data:Localisation)=>{
             return LocalisationMapper.mapToDto(data)
        })
     }

    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}