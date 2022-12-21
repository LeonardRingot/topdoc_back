import { Request, Response } from "express";
import { PlageHoraireRepository } from "../repository/plage_horaire.repository";
import { PlageHoraireService } from "../service/plage_horaire.service";

const plagehoraireService = new PlageHoraireService(new PlageHoraireRepository);

async function getPlageHoraire(req: Request, res: Response) {
    try {
        const result = await plagehoraireService.findById(1);
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

    } catch(err) {
        res.status(500).json(err)
    }

}

const handler = {getPlageHoraire}

export default handler;