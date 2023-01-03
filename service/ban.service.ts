import { bansDTO } from "../dto/ban.dto";
import { IRepository } from "../core/repository.interface";
import { Ban } from "~~/models/ban.model";
export class BanService {

    private banRepository: IRepository<bansDTO>;

    constructor(_banRepository : IRepository<bansDTO>) {
        this.banRepository = _banRepository;
    }
    async findAll(): Promise<bansDTO[]> {
        return this.banRepository.findAll()
    }
    async findById(id: number): Promise<bansDTO | null>{
        return this.banRepository.findById(id).then(bansDTO => {
            if (bansDTO === null) return null;
            return bansDTO;
        });
    }
    async create(ban:Ban):Promise<bansDTO | null>{
        return this.banRepository.create(ban).then((data) =>{
            return data
        })
    }
    async delete(id:number):Promise<boolean | number> {
        return this.banRepository.delete(id)
    }
    async update(ban :Ban, id:number ):  Promise<boolean | number>{
        return this.banRepository.update(ban, id)
    }

}