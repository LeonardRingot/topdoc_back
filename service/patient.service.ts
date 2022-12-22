import { patientDTO } from "../dto/patient.dto";
import { IRepository } from "../core/repository.interface";
import { Patient } from "../models/patient.model";
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
    async PatientCreate(patient:Patient):Promise<patientDTO | null>{
        return this.patientRepository.create(patient).then((data) =>{
            return data
        })
    }
   async delete(id:number):Promise<boolean>{
        return this.patientRepository.delete(id)
    }

}