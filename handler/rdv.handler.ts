import { Request, Response } from "express";
import { RdvRepository } from "../repository/rdv.repository";
import { RdvService } from "../service/rdv.service";

const rdvService = new RdvService(new RdvRepository);

async function getRdv(req: Request, res: Response) {
    try {
        const result = await rdvService.findById(1);
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

    } catch(err) {
        res.status(500).json(err)
    }

}

const handler = {getRdv}

export default handler;