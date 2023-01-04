import { userDTO } from "../dto/user.dto";
import { IRepository } from "../core/repository.interface";
import { User } from "~~/models/users.model";
export class UserService {

    private userRepository: IRepository<userDTO>;

    constructor(_userRepository : IRepository<userDTO>) {
        this.userRepository = _userRepository;
    }
    async findAll(): Promise<userDTO[]> {
        return this.userRepository.findAll()
    }
    async findById(id: number): Promise<userDTO | null>{
        return this.userRepository.findById(id).then(userDTO => {
            if (userDTO === null) return null;
            return userDTO;
        });
    }
    async create(user:User):Promise<userDTO | null>{
        return this.userRepository.create(user).then((data) =>{
            return data
        })
    }
    async delete(id:number):Promise<boolean | number> {
        return this.userRepository.delete(id)
    }
    async update(user :User, id:number ):  Promise<boolean | number | undefined>{
        return this.userRepository.update(user, id)
    }

}