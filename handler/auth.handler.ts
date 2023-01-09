import { Request, Response } from "express";
import { AuthDTO } from "~~/dto/auth.dto";
import { userDTOPassword } from "~~/dto/user.dto";
import {IServiceToken }  from "~~/core/service.interface";
const jwt = require('jsonwebtoken')
import bcrypt from 'bcrypt';

export class handlerLogin{
    private authservice : IServiceToken<AuthDTO, userDTOPassword>
    constructor (service:IServiceToken<AuthDTO,userDTOPassword>){
        this.authservice = service;
    }
    token = async (req:Request, res:Response)=>{
        try{
            const refreshToken = req.body.token
            if (refreshToken == null)return res.status(401) // user non identifié
            const token = await this.authservice.findmyToken(refreshToken)
            if (token == null)return res.status(403) // acces refuse
            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err:any)=>{
                if(err) return res.status(403)
                const accessToken = jwt.sign({id:token.UserId}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' })
                res.json({accessToken:accessToken})
            })
        }catch(err) {
            res.status(500).json(err)
        }
    }
    login = async (req: Request, res: Response) => {

        try {
            const user = await this.authservice.findUser(req.body.td_email);

            if (user == null) {
                return res.status(401).json({ userFound: false, message: "utilisateur non trouvé" })
            }

            if (await bcrypt.compare(req.body.td_password, user.td_password)) {
                const accessToken = jwt.sign({ name: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' })
                const refreshToken = jwt.sign({ name: user.id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1Y' })


                const token = await this.authservice.findID(user.id);

                if (token == null) {
                    await this.authservice.create({ refreshToken: refreshToken, UserId: user.id })
                } else {
                    await  this.authservice.update({ refreshToken: refreshToken, UserId:user.id },user.id )
                }

                return res.status(200).json({ successfullLogin: ' connecte', accessToken: accessToken, refreshToken: refreshToken })
            } else {
                return res.status(401).json({ successfullLogin: false, message: 'non connecter' })
            }
        } catch (error) {
            return res.status(500).json(error)
        }

    }

}




