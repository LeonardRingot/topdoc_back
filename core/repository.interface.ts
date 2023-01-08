import { TokenDTO } from "~~/dto/token.dto";
import { userDTOPassword } from "~~/dto/user.dto";
export interface IRepository<T> {
    findAll(): Promise<T[]>;
    findById(id: number): Promise<T | null>;
    create(t: T): Promise<T>;
    delete(id: number): Promise<boolean | number>;
    update(t:T, id:number): Promise<boolean | number | undefined>;
}
export interface IRepositoryAuthentification<T> {
    findAll(): Promise<T[]>;
    create(t: T): Promise<T |null> ;
    update(t:T, id:number): Promise<boolean | number>;
}
export interface IRepositoryToken{
    findAll(): Promise<TokenDTO[]>;
    create(t: TokenDTO, UserId:number): Promise<TokenDTO |undefined> ;
    delete(id: number): Promise<boolean | number>;
}
export interface IRepositoryUser{
    findByTD_email(td_email:string):Promise<userDTOPassword| null>;
}