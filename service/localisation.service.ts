import { LocalisationDTO } from "../dto/localisation.dto";
import { IRepository } from "../core/repository.interface";
import { Localisation } from "~~/models/localisation.model";

export class LocalisationService {

    private localisationRepository: IRepository<LocalisationDTO>;

    constructor(_localisationRepository : IRepository<LocalisationDTO>) {
        this.localisationRepository = _localisationRepository;
    }
    async findAll(): Promise<LocalisationDTO[]> {
        return this.localisationRepository.findAll()
    }
    async findById(id: number): Promise<LocalisationDTO | null>{
        return this.localisationRepository.findById(id).then(LocalisationDTO => {
            if (LocalisationDTO === null) return null;
            return LocalisationDTO;
        });
    }
    async create(localisation:Localisation):Promise<LocalisationDTO | null>{
        return this.localisationRepository.create(localisation).then((data) =>{
            return data
        })
    }
    async delete(id:number):Promise<boolean | number> {
        return this.localisationRepository.delete(id)
    }
    async update(localisation :Localisation, id:number ):  Promise<boolean | number >{
        return this.localisationRepository.update(localisation, id)
    }
}