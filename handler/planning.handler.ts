import { Request, Response } from "express";
import { planningDTO } from "../DTO/planning.dto";
import { IService } from "../core/service.interface"

export class PlanningHandler{
    private planningService: IService<planningDTO>;

    constructor(service: IService<planningDTO>) {
        this.planningService = service;
    }
     getPlannings=async(req: Request, res: Response)=> {
        try {
            const result = await this.planningService.findAll();
            if (result === null) return res.status(404).send()
            res.status(200).json(result)
    
        } catch(err) {
            res.status(500).json(err)
        }
    }
     getPlanningById=async(req: Request, res: Response) =>{
        try {
            const result = await this.planningService.findById(parseInt(req.params.id));
            if (result === null) return res.status(404).send()
            res.status(200).json(result)
    
        } catch(err) {
            res.status(500).json(err)
        }
    }
     createPlanning=async(req: Request, res: Response)=> {
        try {
            const result = await this.planningService.create(req.body);
            if (result === null) return res.status(404).send()
            res.status(200).json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    }
     deletePlanning=async(req:Request, res:Response)=> {
        const id = req.params.id as unknown as number;
        try{
            await this.planningService.delete(id);
          res.status(200).send()
    
        } catch(err) {
            res.status(500).json(err)
        }
    }
     updatePlanning=async(req:Request, res:Response)=>{
        const id = req.params.id as unknown as number;
        try{
            const result = await this.planningService.update(req.body, id)
        }catch(err) {
            res.status(500).json(err)
        }
    }
}



