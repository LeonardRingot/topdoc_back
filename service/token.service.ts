import { TokenDTO } from "../dto/token.dto";
import { IRepository } from "../core/repository.interface";

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

}