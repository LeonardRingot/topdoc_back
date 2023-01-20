import { userDTO} from "../dto/user.dto"
import { User } from "../models/users.model";

export class UserMapper {
    static mapToDto(user: User | null): userDTO | userDTO {
        if (user === null) return null as any;
        return {
            lastname:user.lastname,
           firstname:user.firstname,
           birthday:user.birthday,
            email:user.email ,
            phone: user.phone,
            isActif:user.isActif ,
              
        }
    }


}