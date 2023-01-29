import { Request, Response } from "express";
import { praticienDTO } from "../DTO/praticien.dto";
import { IService } from "../core/service.interface"

export class PraticienHandler{
    private praticienService: IService<praticienDTO>;

    constructor(service: IService<praticienDTO>) {
        this.praticienService = service;
    }
     getPraticiens=async(req: Request, res: Response)=> {
        try {
            const result = await this.praticienService.findAll();
            if (result === null) return res.status(404).send()
            res.status(200).json(result)
    
        } catch(err) {
            res.status(500).json(err)
        }
    }
     getPraticiensById=async(req: Request, res: Response)=> {
        try {
            const result = await this.praticienService.findById(parseInt(req.params.id));
            if (result === null) return res.status(404).send()
            res.status(200).json(result)
    
        } catch(err) {
            res.status(500).json(err)
        }
    }
     createPraticien=async(req: Request, res: Response) =>{
        try {
            const result = await this.praticienService.create(req.body);
            if (result === null) return res.status(404).send()
            res.status(200).json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    }
     deletePraticien=async(req:Request, res:Response)=> {
        const UserId = req.params.id as unknown as number;
        try{
            await this.praticienService.delete(UserId);
          res.status(200).send()
    
        } catch(err) {
            res.status(500).json(err)
        }
    }
     updatePraticien=async(req:Request, res:Response)=> {
        const UserId = req.params.UserId as unknown as number;
        try{
            const result = await this.praticienService.update(req.body, UserId)
        }catch(err) {
            res.status(500).json(err)
        }
    }
}


