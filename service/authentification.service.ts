import { AuthentificationDTO } from "~~/dto/authentification.dto";
import { IRepositoryUser, IRepositoryToken } from "~~/core/repository.interface";
import { IAuthService } from "~~/core/service.interface";
import { Token } from "~~/models/token.model";
import { User } from "~~/models/users.model";
import { userDTOPassword } from "~~/dto/user.dto";
import { TokenDTO } from "~~/dto/token.dto";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
 
export class AuthService implements IAuthService<AuthentificationDTO,TokenDTO>{
    private userRepository : IRepositoryUser<Partial <userDTOPassword>>;
    private tokenRepository: IRepositoryToken<Partial <TokenDTO>>;
    constructor (_tokenRepository: IRepositoryToken< Partial <TokenDTO>>, _userRepository:IRepositoryUser<Partial <userDTOPassword>>){
        this.tokenRepository = _tokenRepository;
        this.userRepository=_userRepository;
    }
    async login(a: AuthentificationDTO): Promise<any> {
        try{
            const user = await this.userRepository.findByTD_email(a.td_email)
            if (!user) return
            if ( await bcrypt.compare(a.td_password, user.td_password!))
            {
                throw new Error('ca a merdé')
            }
            const refreshtoken = jwt.sign({
                id:user.UserId,
                td_lastname:user.td_lastname,
                td_firstname:user.td_firstname
            },
                process.env.REFRESH_TOKEN_SECRET!
            );
            this.tokenRepository.create({
                UserId:user.UserId!,
                refreshToken:refreshtoken

            },user.UserId!)
        }catch(err)
        {
            throw err
        }
    }
    refreshtoken(t: TokenDTO): Promise<Partial<TokenDTO>> {
        throw new Error("Method not implemented.");
    }
    
}