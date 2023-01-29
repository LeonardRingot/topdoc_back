import { Request, Response } from "express";
import { plageHoraireDTO } from "../DTO/plage_horaire.dto";
import { IService } from "../core/service.interface"

export class PlageHoraireHandler{
    private plagehoraireService: IService<plageHoraireDTO>;

    constructor(service: IService<plageHoraireDTO>) {
        this.plagehoraireService = service;
    }
    getPlageHoraires=async(req: Request, res: Response) => {
        try {
            const result = await this.plagehoraireService.findAll();
            if (result === null) return res.status(404).send()
            res.status(200).json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    }
    getPlageHoraireById=async(req: Request, res: Response)=> {
        try {
            const result = await this.plagehoraireService.findById(parseInt(req.params.id));
            if (result === null) return res.status(404).send()
            res.status(200).json(result)
    
        } catch(err) {
            res.status(500).json(err)
        }
    }
   createPlageHoraire=async(req: Request, res: Response) =>{
        try {
            const result = await this.plagehoraireService.create(req.body);
            if (result === null) return res.status(404).send()
            res.status(200).json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    }
     deletePlageHoraire=async(req:Request, res:Response) =>{
        const id = req.params.id as unknown as number;
        try{
            await this.plagehoraireService.delete(id);
          res.status(200).send()
    
        } catch(err) {
            res.status(500).json(err)
        }
    }
     updatePlageHoraire=async(req:Request, res:Response)=> {
        const id = req.params.id as unknown as number;
        try{
            const result = await this.plagehoraireService.update(req.body, id)
        }catch(err) {
            res.status(500).json(err)
        }
    }
}



