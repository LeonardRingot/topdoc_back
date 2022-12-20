import { IRepository } from "../core/repository.interface";
import { userDTO } from "../dto/user.dto";
import { User } from "../models/users.model";
import { UserMapper } from "../mapper/user.mapper";

export class UserRepository implements IRepository<userDTO> {

    async findById(id: number): Promise<userDTO | null> {
        return User.findByPk(id).then(user => UserMapper.mapToDto(user))
    }

    async findAll(): Promise<userDTO[]> {
        throw new Error("Method not implemented.");
    }

    create(t: userDTO): Promise<userDTO> {
        throw new Error("Method not implemented.");
    }

    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}