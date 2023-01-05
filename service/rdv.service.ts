import { rdvDTO } from "../dto/rdv.dto";
import { IRepository } from "../core/repository.interface";
import { Rdv } from "~~/models/rdv.model";

export class RdvService {

    private rdvRepository: IRepository<rdvDTO>;

    constructor(_rdvRepository : IRepository<rdvDTO>) {
        this.rdvRepository = _rdvRepository;
    }
    async findAll(): Promise<rdvDTO[]> {
        return this.rdvRepository.findAll()
    }
    async findById(id: number): Promise<rdvDTO | null>{
        return this.rdvRepository.findById(id).then(rdvDTO => {
            if (rdvDTO === null) return null;
            return rdvDTO;
        });
    }
    async create(rdv:Rdv):Promise<rdvDTO | null>{
        return this.rdvRepository.create(rdv).then((data) =>{
            return data
        })
    }
    async delete(id:number):Promise<boolean | number> {
        return this.rdvRepository.delete(id)
    }
    async update(rdv :Rdv, id:number ):  Promise<boolean | number | undefined>{
        return this.rdvRepository.update(rdv, id)
    }
}