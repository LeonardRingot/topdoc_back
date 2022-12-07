import dotenv from "dotenv";
dotenv.config();

import cors from 'cors'
import express from "express"
import {Response, Request} from 'express'
import { userTypes } from "./types/utilisateur";
import { initDb } from './database/connect';
const app = express()
initDb()
app.use(cors())
app.use(express.json())

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}...`)
})

const { User } = require('./database/connect')