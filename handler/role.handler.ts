import { Request, Response } from "express";
import { RoleRepository } from "../repository/role.repository";
import { RoleService } from "../service/role.service";

const roleservice = new RoleService(new RoleRepository);

async function getRoles(req: Request, res: Response) {
    try {
        const result = await roleservice.findAll();
        if (result === null) return res.status(404).send()
        res.status(200).json(result)
    } catch(err) {
        res.status(500).json(err)
    }
}
async function getRoleById(req: Request, res: Response) {
    try {
        const result = await roleservice.findById(parseInt(req.params.id));
        if (result === null) return res.status(404).send()
        res.status(200).json(result)
    } catch(err) {
        res.status(500).json(err)
    }
}
async function createRole(req: Request, res: Response) {
    try {
        const result = await roleservice.create(req.body);
        if (result === null) return res.status(404).send()
        res.status(200).json(result)
        console.log(result)
    } catch(err) {
        res.status(500).json(err)
    }
}
async function deleteRole(req:Request, res:Response) {
    const id = req.params.id as unknown as number;
    try{
        await roleservice.delete(id);
      res.status(200).send()

    } catch(err) {
        res.status(500).json(err)
    }
}
async function updateRole(req:Request, res:Response) {
    const id = req.params.UserId as unknown as number;
    try{
        const result = await roleservice.update(req.body, id)
    }catch(err) {
        res.status(500).json(err)
    }
}

const handlerRole = {getRoles, getRoleById, createRole, updateRole, deleteRole}

export default handlerRole;