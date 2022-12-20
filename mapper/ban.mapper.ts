import { bansDTO } from "../dto/ban.dto"
import { Ban } from "../models/ban.model";

export class BanMapper {
    static mapToDto(ban: Ban | null): bansDTO | null {
        if (ban === null) return null;
        return {
            
            td_ban_raison: ban.td_ban_raison,
        }
    }

    static mapAllToDto(bans: Ban[]): bansDTO[] {
        return bans.map(ban => {
            return  {
                td_ban_raison: ban.td_ban_raison,
            }
        })
    }

}