import { User } from "~~/models/users.model";
import { PatientDTO } from "../dto/patient.dto"
import { Patient } from "../models/patient.model";

export class PatientMapper {
    static mapToDto(patient: Patient | null): PatientDTO {
        if (patient === null) return null as any;
        return {
        //    UserId:patient.UserId,
           td_numbervitalCode:patient.td_numbervitalCode,
           td_lastname:patient.get({ plain: true }).User.td_lastname,
           td_firstname:patient.get({ plain: true }).User.td_firstname,
           td_birthday:patient.get({ plain: true }).User.td_birthday,
            td_email:patient.get({ plain: true }).User.td_email,
            td_phone:patient.get({ plain: true }).User.td_phone,
            td_isActif:patient.get({ plain: true }).User.td_isActif,
            td_password: patient.get({ plain: true }).User.td_password,
        }
    }

    static mapToDtoCreate(patient: Patient, user:User): PatientDTO {
        
            return  {
              // UserId:patient.UserId,
               td_numbervitalCode:patient.td_numbervitalCode,
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