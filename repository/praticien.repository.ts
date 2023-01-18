import { IRepository } from "../core/repository.interface";
import { praticienDTO } from "../dto/praticien.dto";
import { Praticien } from "../models/praticien.model";
import { PraticienMapper } from "../mapper/praticien.mapper";
import { sequelize } from "~~/database/sequelize";
import { User } from "~~/models/users.model";
import { Localisation } from "~~/models/localisation.model";
import { Role } from "~~/models/role.model";
import { RoleUser } from "~~/database/connect";



export class PraticienRepository implements IRepository<praticienDTO> {
    delete(id: number): Promise<number | boolean> {
        return Praticien.destroy({ where: { UserId: id } }).then(good => good)
    }
    async findById(id: number): Promise<praticienDTO | null> {
        return Praticien.findByPk(id, { include: [User] }).then(praticien => PraticienMapper.mapToDto(praticien))
    }
    async findAll(): Promise<praticienDTO[]> {
        return Praticien.findAll({ include: [User] }).then((praticien: Praticien[]) => praticien.map((praticien: Praticien) => PraticienMapper.mapToDto(praticien)))
    }
    async update(data: praticienDTO & User, id: number): Promise<number | boolean> {
        const userInfo = {
            td_activite:data.td_activite,
             td_lastname:data.td_lastname,
             td_firstname:data.td_firstname,
             td_birthday:data.td_birthday,
             td_email:data.td_email,
             td_password:data.td_password,
             td_phone: data.td_phone,
             td_isActif:data.td_isActif
         }
         const praticienUser = {
             td_activite:data.td_activite
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
                const updatedPraticien = await Praticien.update(
                    praticienUser,
                    {
                        where: { UserId: id },
                        transaction: t
                    }
                )
                return updatedPraticien[0]
            })

        } catch (error) {
            throw error
        }
    }
    async create(data: praticienDTO): Promise<praticienDTO> {
        const t = await sequelize.transaction();
        try {
			const newLocation = await Localisation.create(
				{
					td_address: data.td_address,
					td_city: data.td_city,
					td_zipCode: data.td_zipCode,
				},
				{
					transaction: t,
				}
				);
               
                const praticienRole = await Role.findByPk(3, 
                    
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
                              td_role_nom:praticienRole ? praticienRole.td_role_nom : null,     
				},
				{
					transaction: t,
				}
			);
            const newRole =   await RoleUser.create(
                {
                UserId: newUser.id,
                RoleRoleId: praticienRole ? praticienRole.RoleId:null,
                
                },
                {
                transaction: t,
                }
            );
            const newPraticien = await Praticien.create(
				{
					UserId: newUser.id,
                    td_activite:data.td_activite,
				},
				{
					transaction: t,
				}
				);
                const result: praticienDTO = {
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
					td_activite: newPraticien.td_activite,
                    td_role_nom:praticienRole ? praticienRole.td_role_nom : null
                    
				};
                console.log("le role",praticienRole)
                await t.commit();
				return result;
			} catch (err) {
				await t.rollback();
				throw err;
			}
        }
}