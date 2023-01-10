import { Request, Response } from "express";
import { roleDTO } from "../DTO/role.dto";
import { IService } from "../core/service.interface"

export class RoleHandler{
    private roleservice: IService<roleDTO>;

    constructor(service: IService<roleDTO>) {
        this.roleservice = service;
    }

     getRoles=async(req: Request, res: Response) =>{
        try {
            const result = await this.roleservice.findAll();
            if (result === null) return res.status(404).send()
            res.status(200).json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    }
    getRoleById=async(req: Request, res: Response)=> {
        try {
            const result = await this.roleservice.findById(parseInt(req.params.id));
            if (result === null) return res.status(404).send()
            res.status(200).json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    }
    createRole=async(req: Request, res: Response)=> {
        try {
            const result = await this.roleservice.create(req.body);
            if (result === null) return res.status(404).send()
            res.status(200).json(result)
            console.log(result)
        } catch(err) {
            res.status(500).json(err)
        }
    }
 deleteRole=async(req:Request, res:Response)=>{
        const id = req.params.id as unknown as number;
        try{
            await this.roleservice.delete(id);
          res.status(200).send()
    
        } catch(err) {
            res.status(500).json(err)
        }
    }
     updateRole=async(req:Request, res:Response)=> {
        const id = req.params.UserId as unknown as number;
        try{
            const result = await this.roleservice.update(req.body, id)
        }catch(err) {
            res.status(500).json(err)
        }
    }
}



