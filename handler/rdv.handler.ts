import { Request, Response } from "express";
import { RdvRepository } from "../repository/rdv.repository";
import { RdvService } from "../service/rdv.service";

const rdvService = new RdvService(new RdvRepository);

async function getRdvs(req: Request, res: Response) {
    try {
        const result = await rdvService.findAll();
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

    } catch(err) {
        res.status(500).json(err)
    }

}
async function getRdvById(req: Request, res: Response) {
    try {
        const result = await rdvService.findById(parseInt(req.params.id));
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

    } catch(err) {
        res.status(500).json(err)
    }

}
async function createRdv(req: Request, res: Response) {
    try {
        const result = await rdvService.create(req.body);
        if (result === null) return res.status(404).send()
        res.status(200).json(result)
        console.log(result)
    } catch(err) {
        res.status(500).json(err)
    }

}
async function deleteRdv(req:Request, res:Response) {
    const id = req.params.id as unknown as number;
    try{
        await rdvService.delete(id);
      res.status(200).send()

    } catch(err) {
        res.status(500).json(err)
    }
}
async function updateRdv(req:Request, res:Response) {
    const id = req.params.id as unknown as number;
    try{
        const result = await rdvService.update(req.body, id)
    }catch(err) {
        res.status(500).json(err)
    }
}

const handlerRdv = {getRdvs, getRdvById, createRdv, deleteRdv, updateRdv}

export default handlerRdv;