import { praticienDTO } from "../dto/praticien.dto"
import { Praticien } from "../models/praticien.model";
import { User } from "~~/models/users.model";

export class PraticienMapper {
    static mapToDto(praticien: Praticien | null): praticienDTO {
        if (praticien === null) return null as any;
        return {
           
            td_activite: praticien.td_activite,
            td_lastname:praticien.get({ plain: true }).User.td_lastname,
            td_firstname:praticien.get({ plain: true }).User.td_firstname,
            td_birthday:praticien.get({ plain: true }).User.td_birthday,
            td_email:praticien.get({ plain: true }).User.td_email,
            td_phone: praticien.get({ plain: true }).User.td_phone,
            td_isActif:praticien.get({ plain: true }).User.td_isActif,
            td_password:praticien.get({ plain: true }).User.td_password,
        }
    }

    static mapToDtoCreate(praticien: Praticien, user:User): praticienDTO {
       
            return  {
                td_activite: praticien.td_activite,
                td_lastname:user.td_lastname,
                td_firstname:user.td_firstname,
                td_birthday:user.td_birthday,
                 td_email:user.td_email ,
                 td_phone: user.td_phone,
                 td_isActif:user.td_isActif ,
                 td_password: user.td_password
            }
       
    }

}