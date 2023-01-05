import { Request, Response } from "express";
import { AuthentificationDTO } from "~~/dto/authentification.dto";
import { Token } from "~~/models/token.model";
import { User } from "~~/models/users.model";
import bcrypt from 'bcrypt'
const jwt = require('jsonwebtoken')

async function  login(req:Request, res:Response) {
    try{
        const user =  await User.findOne({where:{td_email:req.body.td_email}})
        let message: string = ''
        if (user == null)
        {
            message = "User not found"
            return res.status(400).json({ userFound: false, message: message })
        }
        if (user.td_password="e"){
            message = "OK"
            const refreshToken = jwt.sign({UserId:user.id}, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1Y' })
            const token = Token.findOne({where:{UserId:user.id}})
            if (token !== null)
            {
                Token.destroy({where:{id:user.id}})
            }
            
                Token.create({
                    refreshToken:refreshToken,
                    UserId:user.id
                })
            
            return res.status(200).json({successfullLogin: true})
        }else {
            message = "Erreur du mot de passe."

             res.status(401).json({ successfullLogin: false, message: message })
        }
    }catch(err){
        let messageError: string = ''
        messageError = 'Pas a acces à la liste'
        res.status(500).json(err)
    }
}
const handlerLogin = {login}
export default handlerLogin;