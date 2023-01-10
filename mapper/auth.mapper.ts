import { AuthDTO } from "~~/dto/auth.dto";
import { tokenId } from "~~/types/token";
import { userLoginDTO} from "~~/dto/user.dto";
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
    static mapToCoDto(user: userId | null): userLoginDTO {
        if (user === null) {
            return null as any;
        }
        const dto :userLoginDTO =  {
            UserId:user.id,
           td_email:user.td_email,
           td_password:user.td_password
        }
        return dto;
    }
}