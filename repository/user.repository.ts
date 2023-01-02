import { IRepository } from "../core/repository.interface";
import { userDTO } from "../dto/user.dto";
import { User } from "../models/users.model";
import { UserMapper } from "../mapper/user.mapper";

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

    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}