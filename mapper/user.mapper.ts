import { userDTO } from "../dto/user.dto"
import { User } from "../models/users.model";

export class UserMapper {
    static mapToDto(user: User | null): userDTO  {
        if (user === null) return null as any;
        return {
           
            td_email:user.td_email ,
            td_phone: user.td_phone,
            td_isActif:user.td_isActif ,
            td_password: user.td_password,
              LocalisationId: user.LocalisationId,
        }
    }

    static mapAllToDto(users: User[]): userDTO[] {
        return users.map(user => {
            return  {
               
                td_email:user.td_email ,
                td_phone: user.td_phone,
                td_isActif:user.td_isActif ,
                td_password: user.td_password,
                  LocalisationId: user.LocalisationId,
            }
        })
    }

}