import { IRepository } from "../core/repository.interface";
import { userDTO } from "../dto/user.dto";
import { User } from "../models/users.model";
import { UserMapper } from "../mapper/user.mapper"
export class UserRepository implements IRepository<userDTO> {
    async findById(id: number): Promise<userDTO | null> {
        return User.findByPk(id).then((user: User | null) => UserMapper.mapToDto(user))
    }

    async findAll(): Promise<userDTO[]> {
       return User.findAll().then((users: User[]) => users.map((user) => UserMapper.mapToDto(user)))
    }
    async create(t: Omit<User, 'id'>): Promise<userDTO | null> {
        try {
            return User.create(t).then((user: User) => UserMapper.mapToDto(user))
        } catch (error) {
            return null
        }
    }
    async delete(id: number): Promise<number |boolean> {
        return User.destroy({where: {id: id}}).then((good: number |boolean ) => good)
    }
    async update(t: User, id: number): Promise<number |boolean> {
        return User.update(t, {where: {id: id}}).then(((good: (number |boolean)[]) => good[0]))
    }

}



