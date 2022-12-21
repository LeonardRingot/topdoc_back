import { LocalisationDTO } from "../dto/localisation.dto";
import { IRepository } from "../core/repository.interface";

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

}