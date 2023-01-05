import { PatientDTO } from "../dto/patient.dto";
import { IRepository } from "../core/repository.interface";
import { Patient } from "../models/patient.model";
import { User } from "~~/models/users.model";
const bcrypt = require("bcrypt");
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
    async create(patient:PatientDTO & User):Promise<PatientDTO | undefined>{
        let hashedPassword = await bcrypt.hash(patient.td_password, 10);
        let patientInfo: PatientDTO = {
            td_numbervitalCode: patient.td_numbervitalCode,
            td_lastname: patient.td_lastname,
            td_firstname: patient.td_firstname,
            td_email: patient.td_email,
            td_password: hashedPassword,
            td_birthday: patient.td_birthday,
            td_phone: patient.td_phone,
            td_isActif:patient.td_isActif
        }
        return this.patientRepository.create(patientInfo)
    }
    async delete(id:number):Promise<boolean | number> {
        return this.patientRepository.delete(id)
    }
    async update(patient :PatientDTO & User, id:number ):  Promise<boolean | number | undefined>{
        let hashedPassword
        if (patient.td_password) hashedPassword = await bcrypt.hash(patient.td_password, 10)
        let patientInfo: PatientDTO = {
            td_numbervitalCode: patient.td_numbervitalCode,
            td_lastname: patient.td_lastname,
            td_firstname: patient.td_firstname,
            td_email: patient.td_email,
            td_password: hashedPassword,
            td_birthday: patient.td_birthday,
            td_phone: patient.td_phone,
            td_isActif:patient.td_isActif
        }
        const updatedPatient = await this.patientRepository.update(patientInfo, id)
        return updatedPatient
    }
}