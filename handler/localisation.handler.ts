import { Request, Response } from "express";
import { LocalisationRepository } from "../repository/localisation.repository";
import { LocalisationService } from "../service/localisation.service";

const localisationService = new LocalisationService(new LocalisationRepository);

async function getLocalisation(req: Request, res: Response) {
    try {
        const result = await localisationService.findById(1);
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

    } catch(err) {
        res.status(500).json(err)
    }

}

const handlerLocalisation = {getLocalisation}

export default handlerLocalisation;