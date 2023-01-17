import { IRepository } from "../core/repository.interface";
import { plageHoraireDTO } from "../dto/plage_horaire.dto";
import { Plage_Horaire } from "../models/plage_horaire.model";
import { PlageHoraireMapper } from "../mapper/plage_horaire.mapper";

export class PlageHoraireRepository implements IRepository<plageHoraireDTO> {
    async findById(id: number): Promise<plageHoraireDTO | null> {
        return Plage_Horaire.findByPk(id).then((data:Plage_Horaire | null) =>{
            return PlageHoraireMapper.mapToDto(data)
        })
    }
    async findAll(): Promise<Array<plageHoraireDTO>> {
        return Plage_Horaire.findAll().then((data:Array<Plage_Horaire>) =>{
            return data.map((user:Plage_Horaire)=>{
                return PlageHoraireMapper.mapToDto(user)
            })
        })
    }
    async  create(body: Partial<Plage_Horaire>): Promise<plageHoraireDTO> {
        return Plage_Horaire.create(body).then((data:Plage_Horaire)=>{
             return PlageHoraireMapper.mapToDto(data)
        })
     }
     async delete(id: number): Promise<boolean | number>
     {
        return Plage_Horaire.destroy({
         where:{
            id:id
         }
     }).then((data:boolean | number)=>{
         return data
     })
     }
     async update(body: Plage_Horaire, id: number): Promise<boolean | number> {
      return Plage_Horaire.update(body, 
          { where:
               { id: id } 
             
           }).then((data: Array<(boolean | number)>) => {
          return data[0]
      })
  }
}