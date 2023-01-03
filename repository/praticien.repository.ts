import { IRepository } from "../core/repository.interface";
import { praticienDTO } from "../dto/praticien.dto";
import { Praticien } from "../models/praticien.model";
import { PraticienMapper } from "../mapper/praticien.mapper";

export class PraticienRepository implements IRepository<praticienDTO> {

    async findById(id: number): Promise<praticienDTO | null> {
        return Praticien.findByPk(id).then((data:Praticien | null) =>{
            return PraticienMapper.mapToDto(data)
        })
    }

    async findAll(): Promise<Array<praticienDTO>> {
        return Praticien.findAll().then((data:Array<Praticien>) =>{
            return data.map((praticien:Praticien)=>{
                return PraticienMapper.mapToDto(praticien)
            })
        })
    }

  async  create(body: Partial<Praticien>): Promise<praticienDTO> {
       return Praticien.create(body).then((data:Praticien)=>{
            return PraticienMapper.mapToDto(data)
       })
    }

    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}