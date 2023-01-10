import { TokenDTO } from "~~/dto/token.dto";
import { userDTOPassword } from "~~/dto/user.dto";
export interface IRepository<T> {
    findById(id: number): Promise<T | null>;
    findAll(): Promise<T[]>;
    create(t: T): Promise<T | null>;
    delete(id: number): Promise<number |boolean>;
    update(t: T, id: number): Promise<number |boolean>;
}
export interface IRepositoryAuth<T,D> {
    create(t: T): Promise<T | null>;
    update(t: T, id: number): Promise<number |boolean>;
    findToken(refreshToken:string): Promise<T | null>;
    findUser(td_email: string): Promise<D | null>;
    findTokenOfUser(id: number): Promise<D | null>; 
}

