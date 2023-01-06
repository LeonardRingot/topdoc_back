// import { Request, Response } from "express";
// import { AuthentificationDTO } from "~~/dto/authentification.dto";
// import { Token } from "~~/models/token.model";
// import { User } from "~~/models/users.model";
// import bcrypt from 'bcrypt'
// import { AuthService } from "~~/service/authentification.service";
// import { AuthentificationRepository } from "~~/repository/authentification.repository";
// import { TokenService } from "~~/service/token.service";
// import { TokenRepository } from "~~/repository/token.repository";
// const jwt = require('jsonwebtoken')

// const authservice = new AuthService(new AuthentificationRepository);
// const tokenservice = new TokenService(new TokenRepository)
// async function  login(req:Request, res:Response) {
//     try{
//         const result = await authservice.findAll();
//         if (result === null) return res.status(404).send()
//         res.status(200).json(result)
//     }catch(err) {
//         res.status(500).json(err)

//     }
// }
// async function  token(req:Request, res:Response) {
//     try{
//         const result = await tokenservice.findAll();
//         if (result === null) return res.status(404).send()
//         res.status(200).json(result)
//     }catch(err) {
//         res.status(500).json(err)

//     }
// }
// const handlerLogin = {login, token}
// export default handlerLogin;