import { congeDTO } from "../dto/conge.dto";
import { IRepository } from "../core/repository.interface";
import { Conge } from "~~/models/conge.model";

export class CongeService {

    private congeRepository: IRepository<congeDTO>;

    constructor(_congerepository : IRepository<congeDTO>) {
        this.congeRepository = _congerepository;
    }
    async findAll(): Promise<congeDTO[]> {
        return this.congeRepository.findAll()
    }
    async findById(id: number): Promise<congeDTO | null>{
        return this.congeRepository.findById(id).then(congeDTO => {
            if (congeDTO === null) return null;
            return congeDTO;
        });
    }
    async create(conge:Conge):Promise<congeDTO | null>{
        return this.congeRepository.create(conge).then((data) =>{
            return data
        })
    }
    async delete(id:number):Promise<boolean | number> {
        return this.congeRepository.delete(id)
    }
    async update(conge :Conge, id:number ):  Promise<boolean | number | undefined>{
        return this.congeRepository.update(conge, id)
    }
}