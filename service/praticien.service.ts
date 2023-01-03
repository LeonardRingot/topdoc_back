import { praticienDTO } from "../dto/praticien.dto";
import { IRepository } from "../core/repository.interface";
import { Praticien } from "~~/models/praticien.model";

export class PraticienService {

    private praticienRepository: IRepository<praticienDTO>;

    constructor(_praticienRepository : IRepository<praticienDTO>) {
        this.praticienRepository = _praticienRepository;
    }
    async findAll(): Promise<praticienDTO[]> {
        return this.praticienRepository.findAll()
    }
    async findById(id: number): Promise<praticienDTO | null>{
        return this.praticienRepository.findById(id).then(praticienDTO => {
            if (praticienDTO === null) return null;
            return praticienDTO;
        });
    }
    async create(praticien:Praticien):Promise<praticienDTO | null>{
        return this.praticienRepository.create(praticien).then((data) =>{
            return data
        })
    }
    async delete(id:number):Promise<boolean | number> {
        return this.praticienRepository.delete(id)
    }
    async update(praticien :Praticien, id:number ):  Promise<boolean | number>{
        return this.praticienRepository.update(praticien, id)
    }

}