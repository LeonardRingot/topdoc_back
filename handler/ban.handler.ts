import { Request, Response } from "express";
import { BanRepository } from "../repository/ban.repository";
import { BanService } from "../service/ban.service";

const banService = new BanService(new BanRepository);

async function getBans(req: Request, res: Response) {
    try {
        const result = await banService.findAll();
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

    } catch(err) {
        res.status(500).json(err)
    }

}
async function getBanById(req: Request, res: Response) {
    try {
        const result = await banService.findById(parseInt(req.params.id));
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

    } catch(err) {
        res.status(500).json(err)
    }

}
async function createBan(req: Request, res: Response) {
    try {
        const result = await banService.create(req.body);
        if (result === null) return res.status(404).send()
        res.status(200).json(result)
        console.log(result)
    } catch(err) {
        res.status(500).json(err)
    }

}
async function deleteBan(req:Request, res:Response) {
    const id = req.params.id as unknown as number;
    try{
        await banService.delete(id);
      res.status(200).send()

    } catch(err) {
        res.status(500).json(err)
    }
}
async function updateBan(req:Request, res:Response) {
    const id = req.params.UserId as unknown as number;
    try{
        const result = await banService.update(req.body, id)
    }catch(err) {
        res.status(500).json(err)
    }
}

const handlerBans = {getBans, getBanById, createBan, deleteBan, updateBan}

export default handlerBans;