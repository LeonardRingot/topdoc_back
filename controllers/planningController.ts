import { Router } from "express";
import handlerPlanning  from "~~/handler/planning.handler";
export const planningController = Router();
/**
 * @swagger
 * tags:
 *      name: planning
 *      description: Manage planning
 */

/**
 * @openapi
 * /api/planning:
 *   get:
 *      tags: [planning]
 *      description: Welcome to swagger-jsdoc!
 *      responses:
 *        200:
 *          description: Get the list of all praticiens.
 */
planningController.get('/',handlerPlanning.getPlannings)
/**
 * @openapi
 * /api/planning/{id}:
 *   get:
 *      tags: [planning]
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
planningController.get('/:id',handlerPlanning.getPlanningById)
/**
   * @openapi
  * /api/planning:
  *  post:
  *      tags: [planning]
  *      description: Create a localisation
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
  *          description: Create a new localisation.
  */
planningController.post('/',handlerPlanning.createPlanning)
/**
 * @openapi
 * /api/planning/{id}:
 *   delete:
 *      tags: [planning]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: delete one specifique user.
 */

planningController.delete('/:id',handlerPlanning.deletePlanning)
/**
 * @openapi
 * /api/planning/{id}:
 *  put:
  *      tags: [planning]
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
planningController.put('/:id', handlerPlanning.updatePlanning)