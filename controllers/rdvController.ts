import { Router } from "express";
import {rdvHandler} from "../injection"
export const rdvController = Router();
/**
 * @swagger
 * tags:
 *      name: rdv
 *      description: Manage rdv
 */

/**
 * @openapi
 * /api/rdv:
 *   get:
 *      tags: [rdv]
 *      description: Welcome to swagger-jsdoc!
 *      responses:
 *        200:
 *          description: Get the list of all praticiens.
 */
rdvController.get('/',rdvHandler.getRdvs)
/**
 * @openapi
 * /api/rdv/{id}:
 *   get:
 *      tags: [rdv]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique user.
 */
rdvController.get('/:id',rdvHandler.getRdvById)
/**
   * @openapi
  * /api/rdv:
  *  post:
  *      tags: [rdv]
  *      description: Create a localisation
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: { "td_date_rendez_vous": "2022-12-09 16:00:00+01", "td_duree_rdv": 20, "td_motif": "aie", "PatientUserId":1, "PraticienUserId":"2" }
  *      responses:
  *        200:
  *          description: Create a new localisation.
  */
rdvController.post('/',rdvHandler.createRdv)
/**
 * @openapi
 * /api/rdv/{id}:
 *   delete:
 *      tags: [rdv]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: delete one specifique user.
 */

rdvController.delete('/:id',rdvHandler.deleteRdv)
/**
 * @openapi
 * /api/rdv/{id}:
 *  put:
  *      tags: [rdv]
  *      description: Update a user
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *         default: 1
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default:  {"praticiens": {"td_activite": "OUIIIIIIIIIIIIIII"}, "users":{"td_lastname": "a", "td_firstname": "a","td_birthday": "2000-06-31","td_email":"a@a.com", "td_password":"a","td_phone": 11, "td_isActif": true }} 
  *      responses:
  *        200:
  *          description: Update the user of given id.
  */
rdvController.put('/:id', rdvHandler.updateRdv)