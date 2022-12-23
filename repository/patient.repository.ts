import { IRepository } from "../core/repository.interface";
import { PatientDTO } from "../dto/patient.dto";
import { Patient } from "../models/patient.model";
import { PatientMapper } from "../mapper/patient.mapper";
import { sequelize } from "~~/database/sequelize";
import { User } from "~~/models/users.model";


export class PatientRepository implements IRepository<PatientDTO> {

    async findById(PatientId: number): Promise<PatientDTO | null> {
        return Patient.findByPk(PatientId).then(patient => PatientMapper.mapToDto(patient))
    }

    async findAll(): Promise<PatientDTO[]> {
        //throw new Error("Method not implemented.");
        return Patient.findAll().then(patient => PatientMapper.mapAllToDto(patient))
    }

    async create(body: Partial<Patient>): Promise<PatientDTO> {

        const t = await sequelize.transaction();
        try {

            const user = await User.create(body, {
                transaction: t
            })
            const patient = await Patient.create({

                UserId: user.id,
                td_email: user.td_email,
                td_password: user.td_password,
                td_phone: user.td_phone,
                td_isActif:user.td_isActif
            }, { transaction: t })

            await t.commit()
            const dto :PatientDTO = {
                td_firstname: patient.td_firstname,
                td_lastname:patient.td_lastname,
                td_birthday:patient.td_birthday
            }
            return PatientMapper.mapToDto(patient)
            
            } 
        catch(error){
            console.log('MON ERREUR ' + error)
           await t.rollback()
           throw error 
        }
       }



    async delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
