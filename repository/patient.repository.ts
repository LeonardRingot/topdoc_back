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
            return Patient.findAll({
                include: [
                    {
                        model: User,
                        required: false,
                        attributes: {exclude: ['password']},
                        include: [
                            {
                                model: Localisation,
                                
                            },
                            {
                                model: Role,
                                through:RoleUser
                            }
                        ]
                    }
                ]
              }).then((patients: Patient[]) => patients.map((patient: Patient) => PatientMapper.mapToDto(patient)))

        }catch (err){
            console.log(err);
            throw err;
        }
        
       
    }
    async delete(id: number): Promise<number | boolean> {
        return  Patient.destroy({ where: { UserId: id } }).then(good => good)
        
    }
    async findById(id: number): Promise<PatientDTO | null> {
        return Patient.findByPk(id, { include: [
            {
                model: User,
                required: false,
                attributes: {exclude: ['password']},
                include: [
                    {
                        model: Localisation,
                        
                    },
                    {
                        model: Role,
                        
                    }
                ]
            }
        ] }).then(patient => PatientMapper.mapToDto(patient))
    }
    async update(data: PatientDTO & User, id: number): Promise<number | boolean> {
        const userInfo = {
            numbervitalCode:data.numbervitalCode,
             lastname:data.lastname,
             firstname:data.firstname,
             birthday:data.birthday,
             email:data.email,
             password:data.password,
             phone: data.phone,
             isActif:data.isActif
         }
         const patientUser = {
             numbervitalCode:data.numbervitalCode
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
					address: data.address,
					zipCode: data.zipCode,
					city: data.city,
				},
				{
					transaction: t,
				}
				);
                const patientRole = await Role.findByPk(2, 
                    
                    {transaction: t});
				const newUser = await User.create(
					{
                       
                             lastname:data.lastname,
                               firstname:data.firstname,
                              birthday:data.birthday,
                               email:data.email,
                              password:data.password,
                              phone: data.phone,
                              isActif:data.isActif,
                              role_nom:patientRole ? patientRole.role_nom : null,
                              LocalisationId:newLocation.id
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
                    numbervitalCode:data.numbervitalCode,
				},
				{
					transaction: t,
				}
				);
                const result: PatientDTO = {
					UserId: newUser.id,
					firstname: newUser.firstname,
					lastname: newUser.lastname,
					birthday: newUser.birthday,
					email: newUser.email,
					password: newUser.password,
					phone: newUser.phone,
                   isActif:newUser.isActif,
                  address: newLocation.address,
					zipCode: newLocation.zipCode,
					city: newLocation.city,
					numbervitalCode: newPatient.numbervitalCode,
                    role_nom:newRole.role_nom
				};
                await t.commit();
				return result;
			} catch (err) {
				await t.rollback();
				throw err;
			}
        }
}
