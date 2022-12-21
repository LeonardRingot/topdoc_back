import { roleDTO } from "../dto/role.dto";
import { IRepository } from "../core/repository.interface";

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

}