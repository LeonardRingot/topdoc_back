import { AuthDTO } from "~~/dto/auth.dto";
import { IRepositoryUser, IRepositoryToken } from "~~/core/repository.interface";
import { IAuthService } from "~~/core/service.interface";
import { Token } from "~~/models/token.model";
import { User } from "~~/models/users.model";
import { userDTOPassword } from "~~/dto/user.dto";
import { Payload, TokenDTO } from "~~/dto/token.dto";

 
export class AuthService implements IAuthService<AuthDTO,TokenDTO>{
    login(a: AuthDTO): Promise<AuthDTO> {
        throw new Error("Method not implemented.");
    }
    refreshtoken(t: TokenDTO): Promise<Partial<TokenDTO>> {
        throw new Error("Method not implemented.");
    }
    // private userRepository : IRepositoryUser;
    // private tokenRepository: IRepositoryToken;

    // constructor (_tokenRepository: IRepositoryToken, _userRepository:IRepositoryUser){
    //     this.tokenRepository = _tokenRepository;
    //     this.userRepository=_userRepository;
    // }
    // refreshtoken(t: TokenDTO): Promise<Partial<TokenDTO>> {
    //     throw new Error("Method not implemented.");
    // }
    // async login(a: AuthDTO): Promise<any> {
    //     return this.userRepository.findByTD_email(a.td_email).then(authDTO =>{
    //         if (authDTO === null) return null;
    //         return authDTO
    //     });
    // }

    
}