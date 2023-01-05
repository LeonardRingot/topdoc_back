import { Request, Response } from "express";
import { CongeRepository } from "../repository/conge.repository";
import { CongeService } from "../service/conge.service";

const congeService = new CongeService(new CongeRepository);

async function getConges(req: Request, res: Response) {
    try {
        const result = await congeService.findAll();
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

    } catch(err) {
        res.status(500).json(err)
    }
}
async function getCongeById(req: Request, res: Response) {
    try {
        const result = await congeService.findById(parseInt(req.params.id));
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

    } catch(err) {
        res.status(500).json(err)
    }
}
async function createConge(req: Request, res: Response) {
    try {
        const result = await congeService.create(req.body);
        if (result === null) return res.status(404).send()
        res.status(200).json(result)
        console.log(result)
    } catch(err) {
        res.status(500).json(err)
    }
}
async function deleteConge(req:Request, res:Response) {
    const id = req.params.id as unknown as number;
    try{
        await congeService.delete(id);
      res.status(200).send()

    } catch(err) {
        res.status(500).json(err)
    }
}
async function updateConge(req:Request, res:Response) {
    const id = req.params.UserId as unknown as number;
    try{
        const result = await congeService.update(req.body, id)
    }catch(err) {
        res.status(500).json(err)
    }
}
const handlerConge = {getConges, getCongeById, createConge, deleteConge, updateConge}

export default handlerConge;