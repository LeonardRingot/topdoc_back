import { Request, Response } from "express";
import { PlageHoraireRepository } from "../repository/plage_horaire.repository";
import { PlageHoraireService } from "../service/plage_horaire.service";

const plagehoraireService = new PlageHoraireService(new PlageHoraireRepository);

async function getPlageHoraires(req: Request, res: Response) {
    try {
        const result = await plagehoraireService.findAll();
        if (result === null) return res.status(404).send()
        res.status(200).json(result)
    } catch(err) {
        res.status(500).json(err)
    }
}
async function getPlageHoraireById(req: Request, res: Response) {
    try {
        const result = await plagehoraireService.findById(parseInt(req.params.PlanningId));
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

    } catch(err) {
        res.status(500).json(err)
    }
}
async function createPlageHoraire(req: Request, res: Response) {
    try {
        const result = await plagehoraireService.create(req.body);
        if (result === null) return res.status(404).send()
        res.status(200).json(result)
        console.log(result)
    } catch(err) {
        res.status(500).json(err)
    }
}
async function deletePlageHoraire(req:Request, res:Response) {
    const PlanningId = req.params.PlanningId as unknown as number;
    try{
        await plagehoraireService.delete(PlanningId);
      res.status(200).send()

    } catch(err) {
        res.status(500).json(err)
    }
}
async function updatePlageHoraire(req:Request, res:Response) {
    const PlanningId = req.params.PlanningId as unknown as number;
    try{
        const result = await plagehoraireService.update(req.body, PlanningId)
    }catch(err) {
        res.status(500).json(err)
    }
}

const handlerPlageHoraire = {getPlageHoraires, getPlageHoraireById, createPlageHoraire, deletePlageHoraire, updatePlageHoraire}

export default handlerPlageHoraire;