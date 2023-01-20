import { Router } from "express";
import {congeHandler} from "../injection"
export const congeController = Router();
/**
 * @swagger
 * tags:
 *      name: conge
 *      description: Manage conge
 */

/**
 * @openapi
 * /api/conge:
 *   get:
 *      tags: [conge]
 *      description: Welcome to swagger-jsdoc!
 *      responses:
 *        200:
 *          description: Get the list of all praticiens.
 */
congeController.get('/',congeHandler.getConges)
/**
 * @openapi
 * /api/conge/{id}:
 *   get:
 *      tags: [conge]
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
congeController.get('/:id',congeHandler.getCongeById)
/**
   * @openapi
  * /api/conge:
  *  post:
  *      tags: [conge]
  *      description: Create a conge
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: { "startDate": "2026-12-01", "endDate": "2026-12-25", "PraticienUserId":"2" }
  *      responses:
  *        200:
  *          description: Create a new ban.
  */
congeController.post('/',congeHandler.createConge)
/**
 * @openapi
 * /api/conge/{id}:
 *   delete:
 *      tags: [conge]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: delete one specifique user.
 */

congeController.delete('/:id',congeHandler.deleteConge)
/**
 * @openapi
 * /api/conge/{id}:
 *  put:
  *      tags: [conge]
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
congeController.put('/:id', congeHandler.updateConge)