import { IRepositoryAuthentification } from "../core/repository.interface";

import { AuthentificationDTO } from "../dto/authentification.dto";
import { Token } from "~~/models/token.model";
import { tokenId } from "~~/types/token";
import { AuthMapper } from "~~/mapper/auth.mapper";

export class AuthentificationRepository implements IRepositoryAuthentification<AuthentificationDTO> {
   async update(t: AuthentificationDTO, id: number): Promise<number | boolean > {
        throw new Error("Method not implemented.");
    }
    async create(t: Token): Promise<AuthentificationDTO | null> {
        return Token.create(t).then((token: tokenId)=>AuthMapper.mapToDto(token))
    }
    findAll(): Promise<AuthentificationDTO[]> {
        throw new Error("Method not implemented.");
    }
   
    
}