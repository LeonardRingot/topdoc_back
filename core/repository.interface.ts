import { TokenDTO } from "~~/dto/token.dto";
import { userDTOPassword } from "~~/dto/user.dto";
export interface IRepository<T> {
    findAll(): Promise<T[]>;
    findById(id: number): Promise<T | null>;
    create(t: T): Promise<T>;
    delete(id: number): Promise<boolean | number>;
    update(t:T, id:number): Promise<boolean | number | undefined>;
}
export interface IRepositoryAuth<T,D> {
    create(t: T): Promise<T |null> ;
    update(t:T, id:number): Promise<number | boolean>;
    findToken(token:string):Promise<T |null> ;
    findUser(td_email:string):Promise<D |null> ;
    findTokenOfUser(id:number):Promise<D |null> ;
}
export interface IRepositoryToken{
    findAll(): Promise<TokenDTO[]>;
    create(t: TokenDTO, UserId:number): Promise<TokenDTO |undefined> ;
    delete(id: number): Promise<boolean | number>;
}
export interface IRepositoryUser{
    findByTD_email(td_email:string):Promise<userDTOPassword| null>;
}