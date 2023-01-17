import { IRepository } from "../core/repository.interface";
import { planningDTO } from "../dto/planning.dto";
import { Planning } from "../models/planning.model";
import { Conge } from "~~/models/conge.model";
import { PlanningMapper } from "../mapper/planning.mapper";
import { Plage_Horaire } from "~~/models/plage_horaire.model";

export class PlanningRepository implements IRepository<planningDTO> {
    async findById(id: number): Promise<planningDTO | null> {
        const PlanningFound : any = await Planning.findByPk(id).then((data: Planning | null) => {
            return data
        })
        console.log('PLANNING TROUVE', PlanningFound)
        
        const HoursFound = await Plage_Horaire.findAll({
            where: {
                planningId: id
            }
        })
        console.log('HEURE TROUVE', HoursFound)
        const HolidaysFound = await Conge.findAll({
            where: {
                id: PlanningFound.id
            }
        })
        console.log('CONGE TROUVE', HolidaysFound)
        const PlanningBrut = {Planning: PlanningFound, Hours: HoursFound, Holidays: HolidaysFound}
        console.log('Planning BRUUUUUTT', PlanningBrut)
        return PlanningBrut as any
        
    }
    async findAll(): Promise<Array<planningDTO>> {
        return Planning.findAll().then((data:Array<Planning>) =>{
            return data.map((user:Planning)=>{
                return PlanningMapper.mapToDto(user)
            })
        })
    }
    async  create(body: Partial<Planning>): Promise<planningDTO> {
        return Planning.create(body).then((data:Planning)=>{
             return PlanningMapper.mapToDto(data)
        })
     }
     async delete(id: number): Promise<boolean | number>
     {
        return Planning.destroy({
         where:{
          id:id
         }
     }).then((data:boolean | number)=>{
         return data
     })
     }
     async update(body: Planning, id: number): Promise<boolean | number> {
      return Planning.update(body, 
          { where:
               { id: id } 
             
           }).then((data: Array<(boolean | number)>) => {
          return data[0]
      })
  }
}