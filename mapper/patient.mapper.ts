import { PatientDTO } from "../dto/patient.dto"
import { Patient } from "../models/patient.model";

export class PatientMapper {
    static mapToDto(patient: Patient | null): PatientDTO {
        if (patient === null) return null as any;
        return {
           // UserId:patient.UserId,
            td_firstname:patient.td_firstname,
            td_lastname:patient.td_lastname,
            td_birthday:patient.td_birthday,
        }
    }

    static mapAllToDto(patients: Patient[]): PatientDTO[] {
        return patients.map(patient => {
            return  {
               // UserId:patient.UserId,
                td_firstname:patient.td_firstname,
                td_lastname:patient.td_lastname,
                td_birthday:patient.td_birthday,
            }
        })
    }

}