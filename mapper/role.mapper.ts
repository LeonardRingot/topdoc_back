import { roleDTO } from "../dto/role.dto"
import { Role } from "../models/role.model";

export class RoleMapper {
    static mapToDto(role: Role | null): roleDTO  {
        if (role === null) return null as any;
        return {
           role_nom:role.role_nom,
    }
    }
    static mapAllToDto(roles: Role[]): roleDTO[] {
        return roles.map(role => {
            return  {
               role_nom:role.role_nom,
            }
        })
    }

}