import { IRepository } from "../core/repository.interface";
import { PatientDTO } from "../dto/patient.dto";
import { Patient } from "../models/patient.model";
import { PatientMapper } from "../mapper/patient.mapper";
import { sequelize } from "~~/database/sequelize";
import { User } from "~~/models/users.model";


export class PatientRepository implements IRepository<PatientDTO> {
    async findAll(): Promise<PatientDTO[]> {
        return Patient.findAll({ include: [User] }).then((patients: Patient[]) => patients.map((patient: Patient) => PatientMapper.mapToDto(patient)))
    }
    
    delete(id: number): Promise<number | boolean> {
        return Patient.destroy({ where: { UserId: id } }).then(good => good)
    }
    async findById(id: number): Promise<PatientDTO | null> {
        return Patient.findByPk(id, { include: [User] }).then(patient => PatientMapper.mapToDto(patient))
    }
    async update(data: PatientDTO & User, id: number): Promise<number | boolean> {
        const userInfo = {
            td_numbervitalCode:data.td_numbervitalCode,
             td_lastname:data.td_lastname,
             td_firstname:data.td_firstname,
             td_birthday:data.td_birthday,
             td_email:data.td_email,
             td_password:data.td_password,
             td_phone: data.td_phone,
             td_isActif:data.td_isActif
         }
         const patientUser = {
             td_numbervitalCode:data.td_numbervitalCode
         }
         try {
            return await sequelize.transaction(async (t) => {

                await User.update(
                    userInfo,
                    {
                        where: { id: id },
                        transaction: t
                    }
                )

                const updatedPatient = await Patient.update(
                    patientUser,
                    {
                        where: { UserId: id },
                        transaction: t
                    }
                )
                return updatedPatient[0]
            })

        } catch (error) {
            throw error
        }
    }
    async create(data: PatientDTO): Promise<PatientDTO> {
        
       
       const userInfo = {
        td_numbervitalCode:data.td_numbervitalCode,
         td_lastname:data.td_lastname,
         td_firstname:data.td_firstname,
         td_birthday:data.td_birthday,
         td_email:data.td_email,
         td_password:data.td_password,
         td_phone: data.td_phone,
         td_isActif:data.td_isActif
     }
     const patientUser = {
         td_numbervitalCode:data.td_numbervitalCode
     }
    
        try {
            
            return  await sequelize.transaction(async (t) =>
            {
                const newUser = await User.create(userInfo,  { transaction: t }
            )
                    
            
            return Patient.create
            (
                { ...patientUser, UserId: newUser.UserId },
                { transaction: t }
            )
                .then((patient: Patient) => PatientMapper.mapToDtoCreate(patient, newUser))
            })
        }catch (error: any) {
            console.log(error)
            return null as any
        }
    }
       
}
