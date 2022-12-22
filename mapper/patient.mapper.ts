import { patientDTO } from "../dto/patient.dto"
import { Patient } from "../models/patient.model";

export class PatientMapper {
    static mapToDto(patient: Patient | null): patientDTO {
        if (patient === null) return null as any;
        return {
            PatientId:patient.PatientId,
            td_firstname:patient.td_firstname,
            td_lastname:patient.td_lastname,
            td_birthday:patient.td_birthday,
        }
    }

    static mapAllToDto(patients: Patient[]): patientDTO[] {
        return patients.map(patient => {
            return  {
                PatientId:patient.PatientId,
                td_firstname:patient.td_firstname,
                td_lastname:patient.td_lastname,
                td_birthday:patient.td_birthday,
            }
        })
    }

}