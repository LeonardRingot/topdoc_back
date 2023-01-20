import { Router } from "express";
import {praticienHandler} from "../injection"
export const praticienController = Router();
/**
 * @swagger
 * tags:
 *      name: Praticiens
 *      description: Manage Praticiens
 */

/**
 * @openapi
 * /api/praticiens:
 *   get:
 *      tags: [Praticiens]
 *      description: Welcome to swagger-jsdoc!
 *      responses:
 *        200:
 *          description: Get the list of all praticiens.
 */
praticienController.get('/',praticienHandler.getPraticiens)
/**
 * @openapi
 * /api/praticiens/{id}:
 *   get:
 *      tags: [Praticiens]
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
praticienController.get('/:id',praticienHandler.getPraticiensById)
/**
 * @openapi
 * /api/praticiens:
 *   post:
 *      tags: [Praticiens]
 *      description: Create a Patient
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default:  {"activite": "dentiste", "lastname": "a", "firstname": "a","birthday": "2000-06-31","email":"a@alol.com", "password":"a","phone": 112, "address":"address","city":"vccity","zipCode":"62240" ,"isActif": true  }
  *      responses:
  *        200:
  *          description: Create a new patient.
 */
praticienController.post('/',praticienHandler.createPraticien)
/**
 * @openapi
 * /api/praticiens/{id}:
 *   delete:
 *      tags: [Praticiens]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: delete one specifique user.
 */

praticienController.delete('/:id',praticienHandler.deletePraticien)
/**
 * @openapi
 * /api/praticiens/{id}:
 *  put:
  *      tags: [Praticiens]
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
  *         default:  {"activite": "dentiste", "lastname": "a", "firstname": "a","birthday": "2000-06-31","email":"a@a.com", "password":"a","phone": 11, "isActif": true }
  *      responses:
  *        200:
  *          description: Update the user of given id.
  */
praticienController.put('/:id', praticienHandler.updatePraticien)