import { AuthentificationDTO } from "~~/dto/authentification.dto";
import { tokenId } from "~~/types/token";

export class AuthMapper {
    static mapToDto(auth: tokenId | null): AuthentificationDTO  {
        if (auth === null) return null as any;
        return {
            UserdId:auth.UserId,
           refreshToken:auth.refreshToken,
        }
    }
}