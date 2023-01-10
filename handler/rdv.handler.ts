import { Request, Response } from "express";
import { rdvDTO } from "../DTO/rdv.dto";
import { IService } from "../core/service.interface"

export class RdvHandler{
    private rdvService: IService<rdvDTO>;

    constructor(service: IService<rdvDTO>) {
        this.rdvService = service;
    }
     getRdvs=async(req: Request, res: Response)=> {
        try {
            const result = await this.rdvService.findAll();
            if (result === null) return res.status(404).send()
            res.status(200).json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    }
   getRdvById=async(req: Request, res: Response)=> {
        try {
            const result = await this.rdvService.findById(parseInt(req.params.id));
            if (result === null) return res.status(404).send()
            res.status(200).json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    }
     createRdv=async(req: Request, res: Response)=> {
        try {
            const result = await this.rdvService.create(req.body);
            if (result === null) return res.status(404).send()
            res.status(200).json(result)
            console.log(result)
        } catch(err) {
            res.status(500).json(err)
        }
    }
     deleteRdv=async(req:Request, res:Response)=> {
        const id = req.params.id as unknown as number;
        try{
            await this.rdvService.delete(id);
          res.status(200).send()
    
        } catch(err) {
            res.status(500).json(err)
        }
    }
     updateRdv=async(req:Request, res:Response)=> {
        const id = req.params.id as unknown as number;
        try{
            const result = await this.rdvService.update(req.body, id)
        }catch(err) {
            res.status(500).json(err)
        }
    }
}



