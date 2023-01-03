import { PatientDTO } from "../dto/patient.dto"
import { Patient } from "../models/patient.model";

export class PatientMapper {
    static mapToDto(patient: Patient | null): PatientDTO {
        if (patient === null) return null as any;
        return {
           // UserId:patient.UserId,
           td_patient:patient.td_patient,
        //    td_lastname:patient.td_lastname,
        //    td_firstname:patient.td_firstname,
        //    td_birthday:patient.td_birthday,
        //     td_email:patient.td_email ,
        //     td_phone: patient.td_phone,
        //     td_isActif:patient.td_isActif ,
        //     td_password: patient.td_password
        }
    }

    static mapAllToDto(patients: Patient[]): PatientDTO[] {
        return patients.map(patient => {
            return  {
               // UserId:patient.UserId,
                td_patient:patient.td_patient,
                // td_lastname:patient.td_lastname,
                // td_firstname:patient.td_firstname,
                // td_birthday:patient.td_birthday,
                //  td_email:patient.td_email ,
                //  td_phone: patient.td_phone,
                //  td_isActif:patient.td_isActif ,
                //  td_password: patient.td_password
            }
        })
    }

}