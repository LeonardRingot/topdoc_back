import { IRepository } from "../core/repository.interface";
import { praticienDTO } from "../dto/praticien.dto";
import { Praticien } from "../models/praticien.model";
import { PraticienMapper } from "../mapper/praticien.mapper";
import { sequelize } from "~~/database/sequelize";
import { User } from "~~/models/users.model";

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
             
             return  await sequelize.transaction(async (t) =>
             {
                 const newUser = await User.create(userInfo,  { transaction: t }
             )
             return Praticien.create
             (
                 { ...praticienUser, UserId: newUser.id },
                 { transaction: t }
             )
                 .then((praticien: Praticien) => PraticienMapper.mapToDtoCreate(praticien, newUser))
             })
         }catch (error: any) {
             console.log(error)
             return null as any
         }
     }
}