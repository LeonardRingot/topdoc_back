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
            const result = await this.plagehoraireService.findById(parseInt(req.params.PlanningId));
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
            console.log(result)
        } catch(err) {
            res.status(500).json(err)
        }
    }
     deletePlageHoraire=async(req:Request, res:Response) =>{
        const PlanningId = req.params.PlanningId as unknown as number;
        try{
            await this.plagehoraireService.delete(PlanningId);
          res.status(200).send()
    
        } catch(err) {
            res.status(500).json(err)
        }
    }
     updatePlageHoraire=async(req:Request, res:Response)=> {
        const PlanningId = req.params.PlanningId as unknown as number;
        try{
            const result = await this.plagehoraireService.update(req.body, PlanningId)
        }catch(err) {
            res.status(500).json(err)
        }
    }
}



