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

    async create( body: Partial<PatientDTO>): Promise<PatientDTO> {

        const t = await sequelize.transaction();
    
        try {

            const user = await User.create(body ,{
                transaction: t
            })
            const patient = await Patient.create({
                UserId:11,
                td_patient:'a',
                td_lastname:'a',
                td_firstname:'a',
                td_birthday:new Date("2000-06-31"),
                td_email: 'a@a.com',
                td_password: 'a',
                td_phone: '1',
                td_isActif:true
            }, { transaction: t });
            await t.commit()
            const dto :PatientDTO = {
                td_patient:'a',
                td_lastname:'a',
                td_firstname:'a',
                td_birthday: new Date("2000-06-31"),
                td_email: 'a@a.com',
                td_password: 'a',
                td_phone: 11,
                td_isActif:true
            } 
            console.log(patient.td_patient)
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
