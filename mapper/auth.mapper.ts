import { AuthDTO } from "~~/dto/auth.dto";
import { tokenId } from "~~/types/token";
import { userLoginDTO} from "~~/dto/user.dto";
import { User } from "~~/models/users.model";
import { roleId } from "~~/types/role";
import { Role } from "~~/models/role.model";
import { userId } from "~~/types/utilisateur";

export class AuthMapper {
   static maptoDTO(auth:tokenId):AuthDTO |null{
    if (auth === null) {
        return null 
    }
    const dto:AuthDTO ={
        UserId:auth.UserId,
        refreshToken:auth.refreshToken
    }
    return dto;
   }
    static mapToCoDto(user: User): userLoginDTO {
        if (user === null) {
            return null as any;
        }
        console.log('le role sera',user.get({ plain: true }).Roles[0].role_nom)
        const dto :userLoginDTO =  {
            UserId:user.id,
           email:user.email,
           password:user.password,
           
           role_nom:user.get({ plain: true }).Roles[0].role_nom
        }
        return dto;
    }
}