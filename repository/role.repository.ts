import { IRepository } from "../core/repository.interface";
import { roleDTO } from "../dto/role.dto";
import { Role } from "../models/role.model";
import { RoleMapper } from "../mapper/role.mapper";

export class RoleRepository implements IRepository<roleDTO> {

    async findById(id: number): Promise<roleDTO | null> {
        return Role.findByPk(id).then((data:Role | null) =>{
            return RoleMapper.mapToDto(data)
        })
    }

    async findAll(): Promise<Array<roleDTO>> {
        return Role.findAll().then((data:Array<Role>) =>{
            return data.map((user:Role)=>{
                return RoleMapper.mapToDto(user)
            })
        })
    }

  async  create(body: Partial<Role>): Promise<roleDTO> {
       return Role.create(body).then((data:Role)=>{
            return RoleMapper.mapToDto(data)
       })
    }

    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}