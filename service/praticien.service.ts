import { praticienDTO } from "../dto/praticien.dto";
import { IRepository } from "../core/repository.interface";
import { Praticien } from "~~/models/praticien.model";
import { Role } from "~~/models/role.model";
import { User } from "~~/models/users.model";
import { Localisation } from "~~/models/localisation.model";
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
    async create(praticien:praticienDTO & User & Localisation & Role):Promise<praticienDTO | null>{
        let hashedPassword = await bcrypt.hash(praticien.td_password, 10);
        let praticientInfo: praticienDTO = {
            UserId:praticien.UserId,
          td_activite:praticien.td_activite,
            td_lastname: praticien.td_lastname,
            td_firstname: praticien.td_firstname,
            td_email: praticien.td_email,
            td_password: hashedPassword,
            td_birthday: praticien.td_birthday,
            td_phone: praticien.td_phone,
            td_isActif:praticien.td_isActif,
            td_address:praticien.td_address,
            td_city:praticien.td_city,
            td_zipCode:praticien.td_zipCode,
            td_role_nom:praticien.td_role_nom,
        }
        return this.praticienRepository.create(praticientInfo)
    }
    async delete(id:number):Promise<boolean | number> {
        return this.praticienRepository.delete(id)
    }
    async update(praticien :praticienDTO & User  & Localisation & Role, id:number ):  Promise<boolean | number >{
        let hashedPassword
        if (praticien.td_password) hashedPassword = await bcrypt.hash(praticien.td_password, 10)
        let praticienInfo: praticienDTO = {
            UserId:praticien.UserId,
            td_activite: praticien.td_activite,
            td_lastname: praticien.td_lastname,
            td_firstname: praticien.td_firstname,
            td_email: praticien.td_email,
            td_password: hashedPassword,
            td_birthday: praticien.td_birthday,
            td_phone: praticien.td_phone,
            td_isActif:praticien.td_isActif,
            td_address:praticien.td_address,
            td_city:praticien.td_city,
            td_zipCode:praticien.td_zipCode,
            td_role_nom:praticien.td_role_nom,
        }
        const updatedPraticien = await this.praticienRepository.update(praticienInfo, id)
        return updatedPraticien
    }

}