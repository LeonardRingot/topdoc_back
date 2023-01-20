import { Localisation } from "~~/models/localisation.model";
import { User } from "~~/models/users.model";
import { PatientDTO } from "../dto/patient.dto"
import { Patient } from "../models/patient.model";
import { Role } from "~~/models/role.model";

export class PatientMapper {
    static mapToDto(patient: Patient | null): PatientDTO {
        console.log("DTOPASS")
        if (patient === null) return null as any;
        console.log(patient)
        return {
           UserId:patient.UserId,
           numbervitalCode:patient.numbervitalCode,
           lastname:patient.get({ plain: true }).User.lastname,
           firstname:patient.get({ plain: true }).User.firstname,
           birthday:patient.get({ plain: true }).User.birthday,
            email:patient.get({ plain: true }).User.email,
            phone:patient.get({ plain: true }).User.phone,
            isActif:patient.get({ plain: true }).User.isActif,
            password: patient.get({ plain: true }).User.password,
            address: patient.get({ plain: true }).User.Localisation.address,
			city: patient.get({ plain: true }).User.Localisation.city,
            zipCode: patient.get({ plain: true }).User.Localisation.zipCode,
            role_nom:patient.get({ plain: true }).User.Roles.role_nom,
            
        }
        
    }

    static mapToDtoCreate(patient: Patient, user:User, localisation:Localisation, role:Role): PatientDTO {
        
            return  {
              UserId:patient.UserId,
               numbervitalCode:patient.numbervitalCode,
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