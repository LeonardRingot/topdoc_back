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
export interface IRepositoryToken<T>{
    findAll(): Promise<T[]>;
    create(t: T, UserId:number): Promise<Partial<T> |undefined> ;
    delete(id: number): Promise<boolean | number>;
}
export interface IRepositoryUser<T>{
    findByTD_email(td_email:string):Promise<T| null>;
}