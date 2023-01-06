export interface IServiceToken<T>{
    findAll(): Promise<T[]>;
    create(t: T): Promise<T>;
    update(t:T, id:number): Promise<boolean | number>;
}
export interface IAuthService <A, T>{
    login (a: A):Promise<A>;
    refreshtoken(t:T):Promise<Partial<T>>
}