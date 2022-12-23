import { Request, response, Response } from "express";
import { request } from "http";
import { UserRepository } from "../repository/user.repository";
import { UserService } from "../service/user.service";

const userservice = new UserService(new UserRepository);

async function getUsers(req: Request, res: Response) {
    try {
        const result = await userservice.findAll();
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

    } catch(err) {
        res.status(500).json(err)
    }

}
async function getUserById(req: Request, res: Response) {
    try {
        const result = await userservice.findById(1);
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

    } catch(err) {
        res.status(500).json(err)
    }

}

async function createUser(req: Request, res: Response) {
    

}


const handlerUser = {getUsers, getUserById, createUser}

export default handlerUser;