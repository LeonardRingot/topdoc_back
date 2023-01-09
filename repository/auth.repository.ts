import { IRepositoryAuth } from "../core/repository.interface";

import { AuthDTO  } from "../dto/auth.dto";
import { Token } from "~~/models/token.model";
import { userLoginDTO } from "~~/dto/user.dto";
import { AuthMapper } from "~~/mapper/auth.mapper";
import { User } from "~~/models/users.model";
import { tokenId } from "~~/types/token";
import { userId } from "~~/types/utilisateur";
export class AuthRepository implements IRepositoryAuth<AuthDTO,userLoginDTO > {
   async create(t: Partial<Token>): Promise<AuthDTO | null> {
        return Token.create(t).then((UserId:Token)=>{
            return AuthMapper.maptoDTO(UserId)
        })
    }
    async update(t: AuthDTO, id: number): Promise<number | boolean> {
        return Token.update(t,{where:{userId:id}}).then(((good:boolean[])=>good[0]))
    }
    async findToken(t: string): Promise<AuthDTO | null> {
        return Token.findOne({where:{refreshToken:t}}).then((token:any)=>AuthMapper.maptoDTO(token))
    }
    async findUser(td_email: string): Promise<userLoginDTO | null> {
        return User.findOne({where:{td_email:td_email}}).then((user:any)=>AuthMapper.mapToCoDto(user))
    }
    findTokenOfUser(id: number): Promise<userLoginDTO | null> {
        return Token.findOne({where:{UserId:id}}).then((token:any)=>AuthMapper.maptoDTO(token))
    }
 
    
  
    
}