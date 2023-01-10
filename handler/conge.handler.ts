import { Request, Response } from "express";
import { congeDTO } from "../DTO/conge.dto";
import { IService } from "../core/service.interface"

export class CongeHandler{
    private congeService: IService<congeDTO>;

    constructor(service: IService<congeDTO>) {
        this.congeService = service;
    }
     getConges = async(req: Request, res: Response) =>{
        try {
            const result = await this.congeService.findAll();
            if (result === null) return res.status(404).send()
            res.status(200).json(result)
    
        } catch(err) {
            res.status(500).json(err)
        }
    }
     getCongeById= async(req: Request, res: Response)=> {
        try {
            const result = await this.congeService.findById(parseInt(req.params.id));
            if (result === null) return res.status(404).send()
            res.status(200).json(result)
    
        } catch(err) {
            res.status(500).json(err)
        }
    }
     createConge= async(req: Request, res: Response) =>{
        try {
            const result = await this.congeService.create(req.body);
            if (result === null) return res.status(404).send()
            res.status(200).json(result)
            console.log(result)
        } catch(err) {
            res.status(500).json(err)
        }
    }
     deleteConge= async(req:Request, res:Response)=> {
        const id = req.params.id as unknown as number;
        try{
            await this.congeService.delete(id);
          res.status(200).send()
    
        } catch(err) {
            res.status(500).json(err)
        }
    }
     updateConge= async(req:Request, res:Response) =>{
        const id = req.params.UserId as unknown as number;
        try{
            const result = await this.congeService.update(req.body, id)
        }catch(err) {
            res.status(500).json(err)
        }
    }
}


