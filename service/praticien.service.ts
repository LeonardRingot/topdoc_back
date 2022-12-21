import { praticienDTO } from "../dto/praticien.dto";
import { IRepository } from "../core/repository.interface";

export class praticienService {

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

}