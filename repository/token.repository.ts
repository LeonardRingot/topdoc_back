import { IRepository } from "../core/repository.interface";
import { TokenDTO } from "../dto/token.dto";
import { Token } from "../models/token.model";
import { TokenMapper } from "../mapper/token.mapper";

export class TokenRepository implements IRepository<TokenDTO> {

    async findById(id: number): Promise<TokenDTO | null> {
        return Token.findByPk(id).then((data:Token | null) =>{
            return TokenMapper.mapToDto(data)
        })
    }

    async findAll(): Promise<Array<TokenDTO>> {
        return Token.findAll().then((data:Array<Token>) =>{
            return data.map((user:Token)=>{
                return TokenMapper.mapToDto(user)
            })
        })
    }

  async  create(body: Partial<Token>): Promise<TokenDTO> {
       return Token.create(body).then((data:Token)=>{
            return TokenMapper.mapToDto(data)
       })
    }

    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}