import { plageHoraireDTO } from "../dto/plage_horaire.dto";
import { IRepository } from "../core/repository.interface";

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

}