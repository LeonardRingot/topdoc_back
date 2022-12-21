import { userDTO } from "../dto/user.dto";
import { IRepository } from "../core/repository.interface";

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

}