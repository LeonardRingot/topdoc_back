import { PatientDTO } from "../dto/patient.dto";
import { IRepository } from "../core/repository.interface";
import { Patient } from "../models/patient.model";
export class PatientService {

    private patientRepository: IRepository<PatientDTO>;

    constructor(_patientRepository : IRepository<PatientDTO>) {
        this.patientRepository = _patientRepository;
    }
    async findAll(): Promise<PatientDTO[]> {
        return this.patientRepository.findAll()
    }
    async findById(id: number): Promise<PatientDTO | null>{
        return this.patientRepository.findById(id).then(PatientDTO => {
            if (PatientDTO === null) return null;
            return PatientDTO;
        });
    }
    async create(patient:Patient):Promise<PatientDTO | null>{
        return this.patientRepository.create(patient).then((data) =>{
            return data
        })
    }
   async delete(id:number):Promise<boolean>{
        return this.patientRepository.delete(id)
    }

}