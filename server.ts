import dotenv from "dotenv";
dotenv.config();

import cors from 'cors'
import express from "express"
import { Apirouter } from "./api/routers/api.router";


const sequelize =require('./database/connect')
import { initDb } from './database/connect';
const app = express()
initDb()
app.use(cors())
app.use(express.json())
app.use(Apirouter)
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}...`)
})

// export const Heritage = async ()=>{
//     const t = await sequelize.transaction();
//     try{
//         const newUser = await User.create({
//             td_email: 'a@gmail.com',
//             td_phone: '01',
//             td_isActif: true ,
//             td_password: 'a' ,
//             LocalisationId: 1
//         })
//         console.log('USER IIIID' + newUser.id)
//        await Praticien.create({

//             UserId: newUser.id,
//             td_activite:'podologue'
//         })
//         await t.commit()
//     console.log(' NOUVEAU UTILISATEUR '+newUser)
//     }catch(error){
//         console.log('MON ERREUR ' + error)
//        await t.rollback()
//     }




// }

const { User } = require('./database/connect')
const jwt = require('jsonwebtoken')

// function authenticateToken(req: Request, res: Response, next: NextFunction) {
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]
//     let message = 'No token given'
//     if (token == null) return res.status(401).send({ message })

//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: Error, user: any) => {
//         message = 'Expired token.'
//         if (err) return res.status(403).send({ tokenIsExpired: true, message: message, data: err })
//         req.user = user
//         next()
//     })
// }

// app.get('/api/users/test/:id', authenticateToken, (req: Request, res: Response) => {
//     User.findByPk(req.params.id)
//         .then((user: userTypes) => {
//             if (user === null) {
//                 const message = "Requested user does not exist."
//                 return res.status(404).json({ message })
//             }

//             const message: string = 'User found.'
//             res.json({ message, data: user })
//         })
//         .catch((error: ApiException) => {
//             const message = "Cannot find user."
//             res.status(500).json({ message, data: error })
//         })
// })

////////////////



app.use(({ res: ApiException }: any) => {
    const message = 'Ressource not found.'
    return ApiException.status(404).json({ message })
})

export default app