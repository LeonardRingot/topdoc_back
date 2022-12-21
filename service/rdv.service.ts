import { rdvDTO } from "../dto/rdv.dto";
import { IRepository } from "../core/repository.interface";

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

}