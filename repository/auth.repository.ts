import { IRepositoryAuth } from "../core/repository.interface";
import { AuthDTO  } from "../dto/auth.dto";
import { Token } from "~~/models/token.model";
import { User } from "~~/models/users.model";
import { userLoginDTO } from "~~/dto/user.dto";
import { AuthMapper } from "~~/mapper/auth.mapper";
import { tokenId, tokenTypes } from "~~/types/token";
import { userId } from "~~/types/utilisateur";
import { roleId } from "~~/types/role";
import { Role } from "~~/models/role.model";
import { RoleUser } from "~~/database/connect";
export class AuthRepository implements IRepositoryAuth<AuthDTO,userLoginDTO > {
    async findUser(email: string): Promise<userLoginDTO | null> {
        return User.findOne({
            where:{email:email},
            include: [{model: Role}]
        }).then((user:any)=>AuthMapper.mapToCoDto(user))

        /*return User.findOne({include: [
            {
                model: User,
                required: false,
                attributes: {exclude: ['password']},
                include: [
                   
                    {
                        model: Role
                    }
                ]
            }
        ]}).then((user:any)=>AuthMapper.mapToCoDto(user))*/
    }

   async  findTokenOfUser(id: number): Promise<userLoginDTO | null> {
        return Token.findOne({where: {UserId: id}}).then((token: any | null) => {
            console.log('token from repo',token)
             return AuthMapper.mapToCoDto(token)
        })
       
    }

    create(t: Partial<AuthDTO>): Promise<AuthDTO | null> {
        return Token.create(t).then((token: tokenId) => {
            return AuthMapper.maptoDTO(token)
        })
    }

async update(t: AuthDTO, id: number): Promise<boolean | number> {
        return Token.update(t, 
            { where:
                 { UserId: id } 
               
             }).then((data: Array<(boolean | number)>) => {
            return data[0]
        })
    }

    async findToken(t: string): Promise<AuthDTO | null> {
        return Token.findOne({where:{refreshToken:t}}).then((token:any)=>AuthMapper.maptoDTO(token))
    }
    
  
    
}