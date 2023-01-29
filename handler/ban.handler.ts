import { Request, Response } from "express";
import { bansDTO } from "../DTO/ban.dto";
import { IService } from "../core/service.interface"



export class BanHandler {

    private banService: IService<bansDTO>;

    constructor(service: IService<bansDTO>) {
        this.banService = service;
    }

    getBans  = async (req: Request, res: Response) =>{
        try {
            const result = await this.banService.findAll();
            if (result === null) return res.status(404).send()
            res.status(200).json(result)
    
        } catch(err) {
            res.status(500).json(err)
        }
    }
     getBanById= async(req: Request, res: Response)=> {
        try {
            const result = await this.banService.findById(parseInt(req.params.id));
            if (result === null) return res.status(404).send()
            res.status(200).json(result)
    
        } catch(err) {
            res.status(500).json(err)
        }
    }
     createBan= async(req: Request, res: Response)=> {
        try {
            const result = await this.banService.create(req.body);
            if (result === null) return res.status(404).send()
            res.status(200).json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    }
     deleteBan= async(req:Request, res:Response)=> {
        const id = req.params.id as unknown as number;
        try{
            await this.banService.delete(id);
          res.status(200).send()
    
        } catch(err) {
            res.status(500).json(err)
        }
    }
     updateBan = async(req:Request, res:Response)=> {
        const id = req.params.UserId as unknown as number;
        try{
            const result = await this.banService.update(req.body, id)
        }catch(err) {
            res.status(500).json(err)
        }
}}