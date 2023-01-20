import { praticienDTO } from "../dto/praticien.dto"
import { Praticien } from "../models/praticien.model";
import { User } from "~~/models/users.model";
import { Localisation } from "~~/models/localisation.model";
import { Role } from "~~/models/role.model";


export class PraticienMapper {
    static mapToDto(praticien: Praticien | null): praticienDTO {
        if (praticien === null) return null as any;
        return {
           UserId:praticien.UserId,
            activite: praticien.activite,
            lastname:praticien.get({ plain: true }).User.lastname,
        firstname:praticien.get({ plain: true }).User.firstname,
            birthday:praticien.get({ plain: true }).User.birthday,
            email:praticien.get({ plain: true }).User.email,
            phone: praticien.get({ plain: true }).User.phone,
            isActif:praticien.get({ plain: true }).User.isActif,
            password:praticien.get({ plain: true }).User.password,
            address: praticien.get({ plain: true }).User.Localisation.address,
			city: praticien.get({ plain: true }).User.Localisation.city,
            zipCode: praticien.get({ plain: true }).User.Localisation.zipCode,
            role_nom:praticien.get({ plain: true }).User.Roles.role_nom,
        }
    }

    static mapToDtoCreate(praticien: Praticien, user:User, localisation:Localisation, role:Role): praticienDTO {
       
            return  {
                UserId:praticien.UserId,
                activite: praticien.activite,
                lastname:user.lastname,
                firstname:user.firstname,
                birthday:user.birthday,
                 email:user.email ,
                 phone: user.phone,
                isActif:user.isActif ,
                password: user.password,
                 address: localisation.address,
                city: localisation.city,
                 zipCode: localisation.zipCode,
                 role_nom:role.role_nom
            }
       
    }

}