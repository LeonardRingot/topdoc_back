import { Request, Response } from "express";
import { LocalisationRepository } from "../repository/localisation.repository";
import { LocalisationService } from "../service/localisation.service";

const localisationService = new LocalisationService(new LocalisationRepository);

async function getLocalisations(req: Request, res: Response) {
    try {
        const result = await localisationService.findAll();
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

    } catch(err) {
        res.status(500).json(err)
    }

}
async function getLocalisationsById(req: Request, res: Response) {
    try {
        const result = await localisationService.findById(parseInt(req.params.id));
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

    } catch(err) {
        res.status(500).json(err)
    }

}
async function createLocalisation(req: Request, res: Response) {
    try {
        const result = await localisationService.create(req.body);
        if (result === null) return res.status(404).send()
        res.status(200).json(result)
        console.log(result)
    } catch(err) {
        res.status(500).json(err)
    }

}
async function deleteLocalisation(req:Request, res:Response) {
    const id = req.params.id as unknown as number;
    try{
        await localisationService.delete(id);
      res.status(200).send()

    } catch(err) {
        res.status(500).json(err)
    }
}
async function updateLocalisation(req:Request, res:Response) {
    const id = req.params.UserId as unknown as number;
    try{
        const result = await localisationService.update(req.body, id)
    }catch(err) {
        res.status(500).json(err)
    }
}

const handlerLocalisation = {getLocalisations, createLocalisation, getLocalisationsById, deleteLocalisation, updateLocalisation}

export default handlerLocalisation;