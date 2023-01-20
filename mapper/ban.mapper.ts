import { bansDTO } from "../dto/ban.dto"
import { Ban } from "../models/ban.model";

export class BanMapper {
    static mapToDto(ban: Ban | null): bansDTO  {
        if (ban === null) return null as any;
        return {
            
            ban_raison: ban.ban_raison,
        }
    }
    static mapAllToDto(bans: Ban[]): bansDTO[] {
        return bans.map(ban => {
            return  {
                ban_raison: ban.ban_raison,
            }
        })
    }
}