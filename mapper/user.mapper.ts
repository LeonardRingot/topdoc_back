import { userDTO} from "../dto/user.dto"
import { User } from "../models/users.model";

export class UserMapper {
    static mapToDto(user: User | null): userDTO | userDTO {
        if (user === null) return null as any;
        return {
            td_lastname:user.td_lastname,
           td_firstname:user.td_firstname,
           td_birthday:user.td_birthday,
            td_email:user.td_email ,
            td_phone: user.td_phone,
            td_isActif:user.td_isActif ,
              
        }
    }


}