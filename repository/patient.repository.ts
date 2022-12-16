import { IRepository } from "../core/repository.interface";
import { patientDTO } from "../dto/patient.dto";
import { Patient } from "../models/patient.model";
import { PatientMapper } from "../mapper/patient.mapper";

export class PatientRepository implements IRepository<patientDTO> {

    async findById(id: number): Promise<patientDTO | null> {
        return Patient.findByPk(id).then(patient => PatientMapper.mapToDto(patient))
    }

    async findAll(): Promise<patientDTO[]> {
        throw new Error("Method not implemented.");
    }

    create(t: patientDTO): Promise<patientDTO> {
        throw new Error("Method not implemented.");
    }

    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}