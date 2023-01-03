import { Router } from "express";
import handlerToken  from "~~/handler/token.handler";
export const tokenController = Router();
/**
 * @swagger
 * tags:
 *      name: token
 *      description: Manage token
 */

/**
 * @openapi
 * /api/token:
 *   get:
 *      tags: [token]
 *      description: Welcome to swagger-jsdoc!
 *      responses:
 *        200:
 *          description: Get the list of all praticiens.
 */
tokenController.get('/',handlerToken.getConges)
/**
 * @openapi
 * /api/token/{id}:
 *   get:
 *      tags: [token]
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
congeController.get('/:id',handlerConge.getCongeById)
/**
   * @openapi
  * /api/token:
  *  post:
  *      tags: [token]
  *      description: Create a token
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
congeController.post('/',handlerConge.createConge)
/**
 * @openapi
 * /api/token/{id}:
 *   delete:
 *      tags: [token]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: delete one specifique user.
 */

congeController.delete('/:id',handlerConge.deleteConge)
/**
 * @openapi
 * /api/token/{id}:
 *  put:
  *      tags: [token]
  *      description: Update a token
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
congeController.put('/:id', handlerConge.updateConge)