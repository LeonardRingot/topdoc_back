import { IRepository } from "../core/repository.interface";
import { praticienDTO } from "../dto/praticien.dto";
import { Praticien } from "../models/praticien.model";
import { PraticienMapper } from "../mapper/praticien.mapper";
import { sequelize } from "~~/database/sequelize";
import { User } from "~~/models/users.model";

export class PraticienRepository implements IRepository<praticienDTO> {

    async findById(id: number): Promise<praticienDTO | null> {
        return Praticien.findByPk(id).then((data:Praticien | null) =>{
            return PraticienMapper.mapToDto(data)
        })
    }

    async findAll(): Promise<Array<praticienDTO>> {
        return Praticien.findAll().then((data:Array<Praticien>) =>{
            return data.map((praticien:Praticien)=>{
                return PraticienMapper.mapToDto(praticien)
            })
        })
    }

  async  create(body: Partial<Praticien>): Promise<praticienDTO> {
      const t = await sequelize.transaction();
    
        try {
            
            const user = await User.create({
               UserId:'11',
                td_lastname:'test',
                td_firstname:'a',
                td_birthday:'2022-05-20',
                td_email: 'a@gmail.com',
                td_password:'e',
                td_phone: '1111',
                td_isActif:'true'
            }, { transaction: t , body});
            const patricienUser = await Praticien.create({
                td_activite:'transaction à la con'
            })
           const dto:praticienDTO = await Praticien.create({
                td_activite:patricienUser.td_activite,
                UserId:user.id
            }, { transaction: t });
            
            console.log('success');
            await t.commit()
            return PraticienMapper.mapToDto(patricienUser)
            
            } 
        catch(error){
            
                console.log('MON ERREUR ' + error)
                await t.rollback();
                throw(error)
            
        }
    }

    async delete(UserId: number): Promise<boolean | number>
       {
          return Praticien.destroy({
           where:{
            UserId:UserId
           }
       }).then((data:boolean | number)=>{
           return data
       })
    }
    async update(body: Praticien, UserId: number): Promise<boolean | number> {
        return Praticien.update(body, 
            { where:
                 { UserId: UserId } 
               
             }).then((data: Array<(boolean | number)>) => {
            return data[0]
        })
    }

}