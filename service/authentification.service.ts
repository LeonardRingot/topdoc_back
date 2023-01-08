import { AuthentificationDTO } from "~~/dto/authentification.dto";
import { IRepositoryUser, IRepositoryToken } from "~~/core/repository.interface";
import { IAuthService } from "~~/core/service.interface";
import { Token } from "~~/models/token.model";
import { User } from "~~/models/users.model";
import { userDTOPassword } from "~~/dto/user.dto";
import { Payload, TokenDTO } from "~~/dto/token.dto";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
 
export class AuthService implements IAuthService<AuthentificationDTO,TokenDTO>{
    private userRepository : IRepositoryUser;
    private tokenRepository: IRepositoryToken;
    constructor (_tokenRepository: IRepositoryToken, _userRepository:IRepositoryUser){
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
             const accessToken = jwt.sign(
                {
                    id: user.UserId,
                    td_lastname: user.td_lastname,
                    td_firstname: user.td_firstname
                },
                process.env.ACCESS_TOKEN_SECRET!,
                { expiresIn: "3600s" }
            );
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
            return { refreshtoken , accessToken }
        }catch(err)
        {
            throw err
        }
    }
   async refreshtoken(token: TokenDTO): Promise<TokenDTO> {
         try {
            const tokens = await this.tokenRepository.findAll()

            let refreshTokens: any = []

            tokens.map((token: any) => {
                refreshTokens.push(token.refreshtoken)
            })

            if (!refreshTokens.includes(token.refreshToken)) throw new Error('Forbidden')

            const decoded = jwt.verify(token.refreshToken!, process.env.REFRESH_TOKEN_SECRET!) as Payload

            const accessToken = jwt.sign(
                {
                    id: decoded.UserId,
                    lastname: decoded.td_lastname,
                    firstname: decoded.td_firstname
                },
                process.env.ACCESS_TOKEN_SECRET!,
                { expiresIn: "3600s" }
            )

            return { UserId: parseInt(decoded.UserId), refreshToken: accessToken }

        } catch (err) {
            console.log('service', err)
            throw err
        }

    }
    
}