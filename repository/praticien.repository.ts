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
        return Praticien.findByPk(id, { include: [
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
        ] }).then(praticien => PraticienMapper.mapToDto(praticien))
    }
    async findAll(): Promise<praticienDTO[]> {
        return Praticien.findAll({
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
          }).then((praticien: Praticien[]) => praticien.map((praticien: Praticien) => PraticienMapper.mapToDto(praticien)))
    }
    async update(data: praticienDTO & User, id: number): Promise<number | boolean> {
        const userInfo = {
            activite:data.activite,
             lastname:data.lastname,
             firstname:data.firstname,
             birthday:data.birthday,
             email:data.email,
             password:data.password,
             phone: data.phone,
             isActif:data.isActif
         }
         const praticienUser = {
             activite:data.activite
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
					address: data.address,
					city: data.city,
					zipCode: data.zipCode,
				},
				{
					transaction: t,
				}
				);
               
                const praticienRole = await Role.findByPk(3, 
                    
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
                              role_nom:praticienRole ? praticienRole.role_nom : null, 
                              LocalisationId:newLocation.id    
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
                    activite:data.activite,
				},
				{
					transaction: t,
				}
				);
                const result: praticienDTO = {
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
					activite: newPraticien.activite,
                    role_nom:praticienRole ? praticienRole.role_nom : null
                    
                    
				};
                await t.commit();
				return result;
			} catch (err) {
				await t.rollback();
				throw err;
			}
        }
}