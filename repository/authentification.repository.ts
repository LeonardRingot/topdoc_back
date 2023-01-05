import { IRepositoryAuthentification } from "../core/repository.interface";
import { AuthentificationDTO } from "../dto/authentification.dto";
import { sequelize } from "~~/database/sequelize";
import { User } from "~~/models/users.model";

export class AuthentificationRepository implements IRepositoryAuthentification<AuthentificationDTO> {
    findAll(): Promise<AuthentificationDTO[]> {
        throw new Error("Method not implemented.");
    }
   
    
}