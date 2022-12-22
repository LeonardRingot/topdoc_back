import { Request, Response } from "express";
import { UserRepository } from "../repository/user.repository";
import { UserService } from "../service/user.service";

const userservice = new UserService(new UserRepository);

async function getUser(req: Request, res: Response) {
    try {
        const result = await userservice.findById(1);
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

    } catch(err) {
        res.status(500).json(err)
    }

}

const handlerUser = {getUser}

export default handlerUser;