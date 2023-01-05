import { IRepository } from "../core/repository.interface";
import { bansDTO } from "../dto/ban.dto";
import { Ban } from "../models/ban.model";
import { BanMapper } from "../mapper/ban.mapper";

export class BanRepository implements IRepository<bansDTO> {

    async findById(id: number): Promise<bansDTO | null> {
        return Ban.findByPk(id).then((data:Ban | null) =>{
            return BanMapper.mapToDto(data)
        })
    }
    async findAll(): Promise<Array<bansDTO>> {
        return Ban.findAll().then((data:Array<Ban>) =>{
            return data.map((data:Ban)=>{
                return BanMapper.mapToDto(data)
            })
        })
    }
    async  create(body: Partial<Ban>): Promise<bansDTO> {
        return Ban.create(body).then((data:Ban)=>{
             return BanMapper.mapToDto(data)
        })
     }
    async delete(id: number): Promise<boolean | number>
       {
          return Ban.destroy({
           where:{
            id:id
           }
       }).then((data:boolean | number)=>{
           return data
       })
       }
       async update(body: Ban, id: number): Promise<boolean | number> {
        return Ban.update(body, 
            { where:
                 { id: id } 
               
             }).then((data: Array<(boolean | number)>) => {
            return data[0]
        })
    }
}