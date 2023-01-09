export interface IServiceToken<T, D>{
    findmyToken(t: string): Promise<T | null>;
    findUser(td_email:string):Promise<D | null>;
    create(t: T,): Promise<T>;
    update(t:T, id:number): Promise<boolean | number>;
    delete (id:number):Promise<boolean | number>;
    findID(id: number): Promise<D | null>; 
}
export interface IAuthService <A, T>{
    login (a: A):Promise<A>;
    refreshtoken(t:T):Promise<Partial<T>>
}