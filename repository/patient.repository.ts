import { IRepository } from "../core/repository.interface";
import { patientDTO } from "../dto/patient.dto";
import { Patient } from "../models/patient.model";
import { PatientMapper } from "../mapper/patient.mapper";



export class PatientRepository implements IRepository<patientDTO> {

    async findById(id: number): Promise<patientDTO | null> {
        return Patient.findByPk(id).then(patient => PatientMapper.mapToDto(patient))
    }

     findAll(): Promise<patientDTO[]> {
        //throw new Error("Method not implemented.");
        return Patient.findAll().then(patient => PatientMapper.mapAllToDto(patient))
    }

    async  create(body: Partial<Patient>): Promise<patientDTO> {
        return Patient.create(body).then((data:Patient)=>{
             return PatientMapper.mapToDto(data)
        })
     }
    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}