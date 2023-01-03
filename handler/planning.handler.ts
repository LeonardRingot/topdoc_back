import { Request, Response } from "express";
import { PlanningRepository } from "../repository/planning.repository";
import { PlanningService } from "../service/planning.service";

const planningService = new PlanningService(new PlanningRepository);

async function getPlannings(req: Request, res: Response) {
    try {
        const result = await planningService.findAll();
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

    } catch(err) {
        res.status(500).json(err)
    }

}
async function getPlanningById(req: Request, res: Response) {
    try {
        const result = await planningService.findById(parseInt(req.params.id));
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

    } catch(err) {
        res.status(500).json(err)
    }

}
async function createPlanning(req: Request, res: Response) {
    try {
        const result = await planningService.create(req.body);
        if (result === null) return res.status(404).send()
        res.status(200).json(result)
        console.log(result)
    } catch(err) {
        res.status(500).json(err)
    }

}
async function deletePlanning(req:Request, res:Response) {
    const id = req.params.id as unknown as number;
    try{
        await planningService.delete(id);
      res.status(200).send()

    } catch(err) {
        res.status(500).json(err)
    }
}
async function updatePlanning(req:Request, res:Response) {
    const id = req.params.id as unknown as number;
    try{
        const result = await planningService.update(req.body, id)
    }catch(err) {
        res.status(500).json(err)
    }
}

const handlerPlanning = {getPlannings, getPlanningById, createPlanning, deletePlanning, updatePlanning}

export default handlerPlanning;