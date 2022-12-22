import { Request, Response } from "express";
import { CongeRepository } from "../repository/conge.repository";
import { CongeService } from "../service/conge.service";

const congeService = new CongeService(new CongeRepository);

async function getConges(req: Request, res: Response) {
    try {
        const result = await congeService.findById(1);
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

    } catch(err) {
        res.status(500).json(err)
    }

}

const handlerConge = {getConges}

export default handlerConge;