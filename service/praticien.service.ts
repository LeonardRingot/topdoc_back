import { praticienDTO } from "../dto/praticien.dto";
import { IRepository } from "../core/repository.interface";
import { Praticien } from "~~/models/praticien.model";
import { User } from "~~/models/users.model";
const bcrypt = require("bcrypt");
export class PraticienService {

    private praticienRepository: IRepository<praticienDTO>;

    constructor(_praticienRepository : IRepository<praticienDTO>) {
        this.praticienRepository = _praticienRepository;
    }
    async findAll(): Promise<praticienDTO[]> {
        return this.praticienRepository.findAll()
    }
    async findById(id: number): Promise<praticienDTO | null>{
        return this.praticienRepository.findById(id).then(praticienDTO => {
            if (praticienDTO === null) return null;
            return praticienDTO;
        });
    }
    async create(praticien:praticienDTO & User):Promise<praticienDTO | undefined>{
        let hashedPassword = await bcrypt.hash(praticien.td_password, 10);
        let praticientInfo: praticienDTO = {
          td_activite:praticien.td_activite,
            td_lastname: praticien.td_lastname,
            td_firstname: praticien.td_firstname,
            td_email: praticien.td_email,
            td_password: hashedPassword,
            td_birthday: praticien.td_birthday,
            td_phone: praticien.td_phone,
            td_isActif:praticien.td_isActif
        }
        return this.praticienRepository.create(praticientInfo)
    }
    async delete(id:number):Promise<boolean | number> {
        return this.praticienRepository.delete(id)
    }
    async update(praticien :praticienDTO & User, id:number ):  Promise<boolean | number | undefined>{
        let hashedPassword
        if (praticien.td_password) hashedPassword = await bcrypt.hash(praticien.td_password, 10)
        let praticienInfo: praticienDTO = {
            td_activite: praticien.td_activite,
            td_lastname: praticien.td_lastname,
            td_firstname: praticien.td_firstname,
            td_email: praticien.td_email,
            td_password: hashedPassword,
            td_birthday: praticien.td_birthday,
            td_phone: praticien.td_phone,
            td_isActif:praticien.td_isActif
        }
        const updatedPatient = await this.praticienRepository.update(praticienInfo, id)
        return updatedPatient
        // return this.patientRepository.update(patient, id)
    }

}