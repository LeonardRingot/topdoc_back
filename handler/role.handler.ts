import { Request, Response } from "express";
import { RoleRepository } from "../repository/role.repository";
import { RoleService } from "../service/role.service";

const roleservice = new RoleService(new RoleRepository);

async function getRole(req: Request, res: Response) {
    try {
        const result = await roleservice.findById(1);
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

    } catch(err) {
        res.status(500).json(err)
    }

}

const handlerRole = {getRole}

export default handlerRole;