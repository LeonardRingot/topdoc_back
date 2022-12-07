import dotenv from "dotenv";
dotenv.config();

import cors from 'cors'
import express from "express"
import {Response, Request} from 'express'

const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}...`)
})