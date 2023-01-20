import dotenv from "dotenv";
dotenv.config();

import cors from 'cors'
import express from "express"
import { Response, Request, NextFunction } from 'express';
import { apiController } from './controllers/apiController';

const sequelize =require('./database/connect')

const app = express()
// decommenter la ligne ci-dessous pour reset la BDD à chaque demerrage
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
const { User } = require('./database/connect')
const jwt = require('jsonwebtoken')
export default app