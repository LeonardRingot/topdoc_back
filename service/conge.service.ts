import { congeDTO } from "../dto/conge.dto";
import { IRepository } from "../core/repository.interface";

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

}