import { Request, Response } from "express";
import { PlanningRepository } from "../repository/planning.repository";
import { PlanningService } from "../service/planning.service";

const planningService = new PlanningService(new PlanningRepository);

async function getPlanning(req: Request, res: Response) {
    try {
        const result = await planningService.findById(1);
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

    } catch(err) {
        res.status(500).json(err)
    }

}

const handler = {getPlanning}

export default handler;