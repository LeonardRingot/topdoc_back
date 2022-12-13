import { Router } from "express";
import { ValidationError } from "sequelize";
import { Rdv } from "../database/connect";
import { ApiException } from "../types/exception";


import { rdvTypes } from "../types/rdv";
const rdvController = Router()

/**
 * @swagger
 * tags:
 *      name: rdvs
 *      description: Manage rdvs
 */

/**
  * @openapi
  * /api/rdvs:
  *  post:
  *      tags: [rdvs]
  *      description: Create a Rdv
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default:  {"td_date_rendez_vous": "2022-12-09 18:00:00+01","td_motif": "mal au pied","td_duree_rdv": 20, "PatientUserId":3, "PraticienUserId":2}
  *      responses:
  *        200:
  *          description: Create a new rdv.
  */
 rdvController.post('/', async(req,res)=>{
        Rdv.create(req.body).then((rdv: rdvTypes)=>{
            const message: string = `rdv créé avec succes.`;
            res.json({ message, data: rdv });
        }).catch((error: ApiException) => {
            if (error instanceof ValidationError) {
                return res.status(400).json({ message: error.message, data: error })
            }
            const message = `Echec lors de la création d'un rdv.`
            res.status(500).json({ message, data: error })
        })

        
    
    })
    export { rdvController }