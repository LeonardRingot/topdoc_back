import { plageHoraireDTO } from "../dto/plage_horaire.dto";
import { IRepository } from "../core/repository.interface";
import { Plage_Horaire } from "~~/models/plage_horaire.model";

export class PlageHoraireService {

    private plagehoraireRepository: IRepository<plageHoraireDTO>;

    constructor(_plagehoraireRepository : IRepository<plageHoraireDTO>) {
        this.plagehoraireRepository = _plagehoraireRepository;
    }
    async findAll(): Promise<plageHoraireDTO[]> {
        return this.plagehoraireRepository.findAll()
    }
    async findById(id: number): Promise<plageHoraireDTO | null>{
        return this.plagehoraireRepository.findById(id).then(plageHoraireDTO => {
            if (plageHoraireDTO === null) return null;
            return plageHoraireDTO;
        });
    }
    async create(plage_horaire:Plage_Horaire):Promise<plageHoraireDTO | null>{
        return this.plagehoraireRepository.create(plage_horaire).then((data) =>{
            return data
        })
    }
    async delete(id:number):Promise<boolean | number> {
        return this.plagehoraireRepository.delete(id)
    }
    async update(plage_horaire :Plage_Horaire, id:number ):  Promise<boolean | number >{
        return this.plagehoraireRepository.update(plage_horaire, id)
    }
}