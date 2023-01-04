import { TokenDTO } from "../dto/token.dto";
import { IRepository } from "../core/repository.interface";
import { Token } from "~~/models/token.model";

export class TokenService {

    private tokenRepository: IRepository<TokenDTO>;

    constructor(_tokenRepository : IRepository<TokenDTO>) {
        this.tokenRepository = _tokenRepository;
    }
    async findAll(): Promise<TokenDTO[]> {
        return this.tokenRepository.findAll()
    }
    async findById(id: number): Promise<TokenDTO | null>{
        return this.tokenRepository.findById(id).then(TokenDTO => {
            if (TokenDTO === null) return null;
            return TokenDTO;
        });
    }
    async create(refreshToken:Token):Promise<TokenDTO | null>{
        return this.tokenRepository.create(refreshToken).then((data) =>{
            return data
        })
    }
    async delete(id:number):Promise<boolean | number> {
        return this.tokenRepository.delete(id)
    }
    async update(token :Token, id:number ):  Promise<boolean | number | undefined>{
        return this.tokenRepository.update(token, id)
    }

}