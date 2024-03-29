import { AuthDTO } from "~~/dto/auth.dto";
import { IRepositoryAuth } from "~~/core/repository.interface";
import { IServiceToken } from "~~/core/service.interface";
import { userLoginDTO } from "~~/dto/user.dto";


 
export class AuthService implements IServiceToken<AuthDTO,userLoginDTO>{

    private authRepo: IRepositoryAuth<AuthDTO, userLoginDTO>;

    constructor(_authRepo: IRepositoryAuth<AuthDTO, userLoginDTO>) {
        this.authRepo =_authRepo;
    }
    
     findID(id: number): Promise<userLoginDTO | null> {
        console.log('FindID from sevice', id);
        return this.authRepo.findTokenOfUser(id)
            
    }
    findUser(email: string): Promise<userLoginDTO | null> {
        return this.authRepo.findUser(email).then(user => {
            console.log('findUser from sevice', user);
            
            return user
        })
    }

    findToken(t: string): Promise<AuthDTO | null> {
        return this.authRepo.findToken(t).then(authdto => {
            return authdto
        })
    }
    create(t: AuthDTO): Promise<AuthDTO | null> {
        return this.authRepo.create(t).then(authdto => {
            if(authdto === null) return null;
            return authdto
        })
    }
    update(t: AuthDTO, id: number): Promise<number | boolean> {
        return this.authRepo.update(t,id).then(good => good)
    }
    
}