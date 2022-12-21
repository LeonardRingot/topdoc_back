import { patientDTO } from "../dto/patient.dto";
import { IRepository } from "../core/repository.interface";

export class PatientService {

    private patientRepository: IRepository<patientDTO>;

    constructor(_patientRepository : IRepository<patientDTO>) {
        this.patientRepository = _patientRepository;
    }
    async findAll(): Promise<patientDTO[]> {
        return this.patientRepository.findAll()
    }
    async findById(id: number): Promise<patientDTO | null>{
        return this.patientRepository.findById(id).then(patientDTO => {
            if (patientDTO === null) return null;
            return patientDTO;
        });
    }

}