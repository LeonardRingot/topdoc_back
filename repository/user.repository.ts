import { IRepository } from "../core/repository.interface";
import { userDTO } from "../dto/user.dto";
import { User } from "../models/users.model";
import { UserMapper } from "../mapper/user.mapper"
export class UserRepository implements IRepository<userDTO> {

    async findById(id: number): Promise<userDTO | null> {
        return User.findByPk(id).then((data:User | null) =>{
            return UserMapper.mapToDto(data)
        })
    }
    async findAll(): Promise<Array<userDTO>> {
        return User.findAll().then((data:Array<User>) =>{
            return data.map((user:User)=>{
                
                return UserMapper.mapToDto(user)
            })
        })
    }
    async  create(body: Partial<User>): Promise<userDTO> {
        return User.create(body).then((data:User)=>{
                return UserMapper.mapToDto(data)
        })
        }
   async delete(id: number): Promise<boolean | number>
    {
       return User.destroy({
        where:{
            id:id
        }
    }).then((data:boolean | number)=>{
        return data
    })
    }
    async update(body: User, id: number): Promise<boolean | number> {
        return User.update(body, 
            { where:
                 { id: id } 
               
             }).then((data: Array<(boolean | number)>) => {
            return data[0]
        })
    }
}


