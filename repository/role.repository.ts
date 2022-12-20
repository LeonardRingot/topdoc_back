import { IRepository } from "../core/repository.interface";
import { roleDTO } from "../dto/role.dto";
import { Role } from "../models/role.model";
import { RoleMapper } from "../mapper/role.mapper";

export class RoleRepository implements IRepository<roleDTO> {

    async findById(id: number): Promise<roleDTO | null> {
        return Role.findByPk(id).then(role => RoleMapper.mapToDto(role))
    }

    async findAll(): Promise<roleDTO[]> {
        throw new Error("Method not implemented.");
    }

    create(t: roleDTO): Promise<roleDTO> {
        throw new Error("Method not implemented.");
    }

    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}