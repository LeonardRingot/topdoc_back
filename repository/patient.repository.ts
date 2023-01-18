import { IRepository } from "../core/repository.interface";
import { PatientDTO } from "../dto/patient.dto";
import { Patient } from "../models/patient.model";
import { PatientMapper } from "../mapper/patient.mapper";
import { sequelize } from "~~/database/sequelize";
import { User } from "~~/models/users.model";
import { Localisation } from "~~/models/localisation.model";
import { Role } from "~~/models/role.model";

import { RoleUser } from "~~/database/connect";

export class PatientRepository implements IRepository<PatientDTO> {
    async findAll(): Promise<PatientDTO[]> {
        try{
            console.log("ENTRY")
            return Patient.findAll({ include: [User] }).then((patients: Patient[]) => patients.map((patient: Patient) => PatientMapper.mapToDto(patient)))

        }catch (err){
            console.log(err);
            throw err;
        }
        
       
    }
    async delete(id: number): Promise<number | boolean> {
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
        const t = await sequelize.transaction();
        try {
			const newLocation = await Localisation.create(
				{
					td_address: data.td_address,
					td_zipCode: data.td_zipCode,
					td_city: data.td_city,
				},
				{
					transaction: t,
				}
				);
                const patientRole = await Role.findByPk(2, 
                    
                    {transaction: t});
				const newUser = await User.create(
					{
                       
                              td_lastname:data.td_lastname,
                               td_firstname:data.td_firstname,
                              td_birthday:data.td_birthday,
                               td_email:data.td_email,
                              td_password:data.td_password,
                              td_phone: data.td_phone,
                              td_isActif:data.td_isActif,
                              td_role_nom:patientRole ? patientRole.td_role_nom : null,
				},
				{
					transaction: t,
				},
             
			);
            const newRole =   await RoleUser.create(
                {
                UserId: newUser.id,
                RoleRoleId: patientRole ? patientRole.RoleId:null,
                
                },
                {
                transaction: t,
                }
            );
            const newPatient = await Patient.create(
				{
					UserId: newUser.id,
                    td_numbervitalCode:data.td_numbervitalCode,
				},
				{
					transaction: t,
				}
				);
                const result: PatientDTO = {
					UserId: newUser.id,
					td_firstname: newUser.td_firstname,
					td_lastname: newUser.td_lastname,
					td_birthday: newUser.td_birthday,
					td_email: newUser.td_email,
					td_password: newUser.td_password,
					td_phone: newUser.td_phone,
                    td_isActif:newUser.td_isActif,
                    td_address: newLocation.td_address,
					td_zipCode: newLocation.td_zipCode,
					td_city: newLocation.td_city,
					td_numbervitalCode: newPatient.td_numbervitalCode,
                    td_role_nom:patientRole ?patientRole.td_role_nom:null
				};
                await t.commit();
                console.log("NEW ROLE",patientRole)
				return result;
			} catch (err) {
				await t.rollback();
				throw err;
			}
        }
    //    const userInfo = {
    //      td_numbervitalCode:data.td_numbervitalCode,
    //      td_lastname:data.td_lastname,
    //      td_firstname:data.td_firstname,
    //      td_birthday:data.td_birthday,
    //      td_email:data.td_email,
    //      td_password:data.td_password,
    //      td_phone: data.td_phone,
    //      td_isActif:data.td_isActif
    //  }
    //  const patientUser = {
    //      td_numbervitalCode:data.td_numbervitalCode
    //  }
    //     try {
    //         return  await sequelize.transaction(async (t) =>
    //         {
    //             const newUser = await User.create(userInfo,  { transaction: t }
    //         )
    //         return Patient.create
    //         (
    //             { ...patientUser, UserId: newUser.id },
    //             { transaction: t }
    //         )
    //             .then((patient: Patient) => PatientMapper.mapToDtoCreate(patient, newUser))
    //         })
    //     }catch (error: any) {
    //         console.log(error)
    //         return null as any
    //     }
    // }
}
