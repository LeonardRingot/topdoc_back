import { Request, Response } from "express";
import { PraticienRepository } from "../repository/praticien.repository";
import { PraticienService } from "../service/praticien.service";

const praticienService = new PraticienService(new PraticienRepository);

async function getPraticiens(req: Request, res: Response) {
    try {
        const result = await praticienService.findAll();
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

    } catch(err) {
        res.status(500).json(err)
    }
}
async function getPraticiensById(req: Request, res: Response) {
    try {
        const result = await praticienService.findById(parseInt(req.params.id));
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

    } catch(err) {
        res.status(500).json(err)
    }
}
async function createPraticien(req: Request, res: Response) {
    try {
        const result = await praticienService.create(req.body);
        if (result === null) return res.status(404).send()
        res.status(200).json(result)
        console.log(result)
    } catch(err) {
        res.status(500).json(err)
    }
}
async function deletePraticien(req:Request, res:Response) {
    const UserId = req.params.id as unknown as number;
    try{
        await praticienService.delete(UserId);
      res.status(200).send()

    } catch(err) {
        res.status(500).json(err)
    }
}
async function updatePraticien(req:Request, res:Response) {
    const UserId = req.params.UserId as unknown as number;
    try{
        const result = await praticienService.update(req.body, UserId)
    }catch(err) {
        res.status(500).json(err)
    }
}
const handlerPraticien = {getPraticiens, getPraticiensById,createPraticien, deletePraticien, updatePraticien }

export default handlerPraticien;