import { PatientDTO } from "../dto/patient.dto";
import { IFullRepository } from "../core/repository.interface";
import { IService } from "~~/core/service.interface";
import { Patient } from "../models/patient.model";
import { User } from "~~/models/users.model";
import { Role } from "~~/models/role.model";
import { Localisation } from "~~/models/localisation.model";
const bcrypt = require("bcrypt");
export class PatientService implements IService<PatientDTO> {

    private patientRepository: IFullRepository<PatientDTO>;

    constructor(_patientRepository : IFullRepository<PatientDTO>) {
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
    async create(patient:PatientDTO & User & Localisation):Promise<PatientDTO | null>{
        let hashedPassword = await bcrypt.hash(patient.password, 10);
        
        let patientInfo: PatientDTO = {
            UserId:patient.UserId,
            numbervitalCode: patient.numbervitalCode,
            lastname: patient.lastname,
            firstname: patient.firstname,
            email: patient.email,
            password: hashedPassword,
            birthday: patient.birthday,
            phone: patient.phone,
            isActif:patient.isActif,
            address:patient.address,
            city:patient.city,
            zipCode:patient.zipCode,
            role_nom:patient.role_nom,
        }
        return this.patientRepository.create(patientInfo)
    }
    async delete(id:number):Promise<boolean | number> {
        return this.patientRepository.delete(id)
    }
    async update(patient :PatientDTO & User & Localisation & Role, id:number ):  Promise<boolean | number >{
        let hashedPassword
        if (patient.password) hashedPassword = await bcrypt.hash(patient.password, 10)
        let patientInfo: PatientDTO = {
            UserId:patient.UserId,
            numbervitalCode: patient.numbervitalCode,
            lastname: patient.lastname,
            firstname: patient.firstname,
            email: patient.email,
            password: hashedPassword,
            birthday: patient.birthday,
            phone: patient.phone,
            isActif:patient.isActif,
            address:patient.address,
            city:patient.city,
            zipCode:patient.zipCode,
            role_nom:patient.role_nom,
        }
        const updatedPatient = await this.patientRepository.update(patientInfo, id)
        return updatedPatient
    }
}