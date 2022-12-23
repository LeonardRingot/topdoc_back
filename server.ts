import dotenv from "dotenv";
dotenv.config();

import cors from 'cors'
import express from "express"
import { Response, Request, NextFunction } from 'express';
import { apiController } from './controllers/apiController';


const sequelize =require('./database/connect')

const app = express()
sequelize.initDb()
app.use(express.json())
app.use(cors())



const port = process.env.PORT
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}...`)
})
app.get("/", (req: Request, res: Response) => {
    res.send("SWAGGER : /api/docs")
})
app.use('/api', apiController)

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

// app.use(({ res: ApiException }: any) => {
//     const message = 'Ressource not found.'
//     return ApiException.status(404).json({ message })
// })

export default app