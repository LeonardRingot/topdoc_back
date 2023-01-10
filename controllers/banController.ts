import { Router } from "express";
import {banHandler} from "../injection"
export const banController = Router();
/**
 * @swagger
 * tags:
 *      name: ban
 *      description: Manage rdv
 */

/**
 * @openapi
 * /api/ban:
 *   get:
 *      tags: [ban]
 *      description: Welcome to swagger-jsdoc!
 *      responses:
 *        200:
 *          description: Get the list of all praticiens.
 */
banController.get('/',banHandler.getBans)
/**
 * @openapi
 * /api/ban/{id}:
 *   get:
 *      tags: [ban]
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
banController.get('/:id',banHandler.getBanById)
/**
   * @openapi
  * /api/ban:
  *  post:
  *      tags: [ban]
  *      description: Create a ban
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: { "td_address": "address", "td_zipCode": "zipcode", "td_city": "city" }
  *      responses:
  *        200:
  *          description: Create a new ban.
  */
banController.post('/',banHandler.createBan)
/**
 * @openapi
 * /api/ban/{id}:
 *   delete:
 *      tags: [ban]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: delete one specifique user.
 */

banController.delete('/:id',banHandler.deleteBan)
/**
 * @openapi
 * /api/ban/{id}:
 *  put:
  *      tags: [ban]
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
banController.put('/:id', banHandler.updateBan)