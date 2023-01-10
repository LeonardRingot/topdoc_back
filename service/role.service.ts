import { roleDTO } from "../dto/role.dto";
import { IRepository } from "../core/repository.interface";
import { Role } from "~~/models/role.model";

export class RoleService {

    private roleRepository: IRepository<roleDTO>;

    constructor(_roleRepository : IRepository<roleDTO>) {
        this.roleRepository = _roleRepository;
    }
    async findAll(): Promise<roleDTO[]> {
        return this.roleRepository.findAll()
    }
    async findById(id: number): Promise<roleDTO | null>{
        return this.roleRepository.findById(id).then(roleDTO => {
            if (roleDTO === null) return null;
            return roleDTO;
        });
    }
    async create(role:Role):Promise<roleDTO | null>{
        return this.roleRepository.create(role).then((data) =>{
            return data
        })
    }
    async delete(id:number):Promise<boolean | number> {
        return this.roleRepository.delete(id)
    }
    async update(role :Role, id:number ):  Promise<boolean | number >{
        return this.roleRepository.update(role, id)
    }
}