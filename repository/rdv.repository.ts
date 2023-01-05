import { IRepository } from "../core/repository.interface";
import { rdvDTO } from "../dto/rdv.dto";
import { Rdv } from "../models/rdv.model";
import { RdvMapper } from "../mapper/rdv.mapper";

export class RdvRepository implements IRepository<rdvDTO> {
    async findById(id: number): Promise<rdvDTO | null> {
        return Rdv.findByPk(id).then((data:Rdv | null) =>{
            return RdvMapper.mapToDto(data)
        })
    }
    async findAll(): Promise<Array<rdvDTO>> {
        return Rdv.findAll().then((data:Array<Rdv>) =>{
            return data.map((user:Rdv)=>{
                return RdvMapper.mapToDto(user)
            })
        })
    }
  async  create(body: Partial<Rdv>): Promise<rdvDTO> {
       return Rdv.create(body).then((data:Rdv)=>{
            return RdvMapper.mapToDto(data)
       })
    }
    async delete(id: number): Promise<boolean | number>
       {
          return Rdv.destroy({
           where:{
            id:id
           }
       }).then((data:boolean | number)=>{
           return data
       })
       }
       async update(body: Rdv, id: number): Promise<boolean | number> {
        return Rdv.update(body, 
            { where:
                 { id: id } 
               
             }).then((data: Array<(boolean | number)>) => {
            return data[0]
        })
    }
}