import { Request, Response } from "express";
import { BanRepository } from "../repository/ban.repository";
import { BanService } from "../service/ban.service";

const banService = new BanService(new BanRepository);

async function getBans(req: Request, res: Response) {
    try {
        const result = await banService.findById(1);
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

    } catch(err) {
        res.status(500).json(err)
    }

}

const handlerBans = {getBans}

export default handlerBans;