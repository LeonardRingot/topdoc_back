import { Request, Response } from "express";
import { TokenRepository } from "../repository/token.repository";
import { TokenService } from "../service/token.service";

const tokenservice = new TokenService(new TokenRepository);

async function getTokens(req: Request, res: Response) {
    try {
        const result = await tokenservice.findAll();
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

    } catch(err) {
        res.status(500).json(err)
    }

}
async function getTokenById(req: Request, res: Response) {
    try {
        const result = await tokenservice.findById(parseInt(req.params.id));
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

    } catch(err) {
        res.status(500).json(err)
    }

}
async function createToken(req: Request, res: Response) {
    try {
        const result = await tokenservice.create(req.body);
        if (result === null) return res.status(404).send()
        res.status(200).json(result)
        console.log(result)
    } catch(err) {
        res.status(500).json(err)
    }

}
async function deleteToken(req:Request, res:Response) {
    const id = req.params.id as unknown as number;
    try{
        await tokenservice.delete(id);
      res.status(200).send()

    } catch(err) {
        res.status(500).json(err)
    }
}
async function updateToken(req:Request, res:Response) {
    const id = req.params.UserId as unknown as number;
    try{
        const result = await tokenservice.update(req.body, id)
    }catch(err) {
        res.status(500).json(err)
    }
}

const handlerToken = {getTokens, getTokenById, createToken, deleteToken, updateToken}

export default handlerToken;