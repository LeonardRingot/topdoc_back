import { Request, Response } from "express";
import { TokenRepository } from "../repository/token.repository";
import { TokenService } from "../service/token.service";

const tokenservice = new TokenService(new TokenRepository);

async function getToken(req: Request, res: Response) {
    try {
        const result = await tokenservice.findById(1);
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

    } catch(err) {
        res.status(500).json(err)
    }

}

const handlerToken = {getToken}

export default handlerToken;