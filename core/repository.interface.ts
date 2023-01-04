export interface IRepository<T> {
    findAll(): Promise<T[]>;
    findById(id: number): Promise<T | null>;
    create(t: T): Promise<T>;
    delete(id: number): Promise<boolean | number>;
    update(t:T, id:number): Promise<boolean | number | undefined>;
}