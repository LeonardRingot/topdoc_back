import { TokenDTO } from "../dto/token.dto"
import { Token } from "../models/token.model";

export class TokenMapper {
    static mapToDto(token: Token | null): TokenDTO | null {
        if (token === null) return null;
        return {
           refreshToken:token.refreshToken,
        }
    }

    static mapAllToDto(tokens: Token[]): TokenDTO[] {
        return tokens.map(token => {
            return  {
                refreshToken:token.refreshToken,
            }
        })
    }

}