import { Request, Response } from "express";
import { AuthDTO } from "~~/dto/auth.dto";
import { userLoginDTO } from "~~/dto/user.dto";
import {IServiceToken }  from "~~/core/service.interface";
import { User } from "~~/models/users.model";
import { Role } from "~~/models/role.model";
import { Patient } from "~~/models/patient.model";
import { Praticien } from "~~/models/praticien.model";
import { RoleUser } from "~~/database/connect";
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

export class handlerLogin{
    private authservice : IServiceToken<AuthDTO, userLoginDTO>
    constructor (service:IServiceToken<AuthDTO,userLoginDTO>){
        this.authservice = service;
    }
    token = async (req:Request, res:Response)=>{
        try{
            const refreshToken = req.body.refreshToken
            if (refreshToken == null)return res.status(401) // user non identifié
            const token = await this.authservice.findToken(refreshToken)
            if (token == null)return res.status(403) // acces refuse
            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!, (err:any)=>{
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
            const user = await this.authservice.findUser(req.body.email)
            if (!user) {
                return res.status(401).json({ successfullLogin: false, message: 'email ou mot de passe incorrect' })
            }
            const isMatched = await bcrypt.compare(req.body.password, user.password)
            if (!isMatched) {
                return res.status(401).json({ successfullLogin: false, message: 'email ou mot de passe incorrect' })
            }
            // check user role
            let role_nom = '';
            console.log(user.role_nom)
            if(user.role_nom === "ADMIN"){
                role_nom = 'ADMIN';
            } else if(user.role_nom === "PATIENT"){
                role_nom = 'PATIENT';
            } else if (user.role_nom === "PRATICIEN") {
                role_nom = 'PRATICIEN';
            } else {
                return res.status(401).json({ successfullLogin: false, message: 'Invalid role' });
            }
            
            // sign and return tokens
            const accessToken = jwt.sign({ name: user.UserId }, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '15s' })
            const refreshToken = jwt.sign({ name: user.UserId }, process.env.REFRESH_TOKEN_SECRET!, { expiresIn: '1Y' })
            console.log(user.UserId)
            const token = await this.authservice.findID(user.UserId)
            console.log(token)
           console.log('mon user', user)
            if (token == null) {
                await this.authservice.create({ refreshToken: refreshToken, UserId: user.UserId })
            } else {
                await this.authservice.update({ refreshToken: refreshToken }, user.UserId)
            }
           
            return res.status(200).json({ successfullLogin: ` connecte as ${role_nom}`, accessToken: accessToken, refreshToken: refreshToken })
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}