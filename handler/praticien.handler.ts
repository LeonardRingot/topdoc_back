import { Request, Response } from "express";
import { PraticienRepository } from "../repository/praticien.repository";
import { praticienService } from "../service/praticien.service";

const PraticienService = new praticienService(new PraticienRepository);

async function getPraticien(req: Request, res: Response) {
    try {
        const result = await PraticienService.findById(1);
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

    } catch(err) {
        res.status(500).json(err)
    }

}

const handler = {getPraticien}

export default handler;