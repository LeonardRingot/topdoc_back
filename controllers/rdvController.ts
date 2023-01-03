import { Router } from "express";
import handlerRdv  from "~~/handler/rdv.handler";
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
rdvController.get('/',handlerRdv.getRdvs)
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
rdvController.get('/:id',handlerRdv.getRdvById)
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
  *         default: { "td_address": "address", "td_zipCode": "zipcode", "td_city": "city" }
  *      responses:
  *        200:
  *          description: Create a new localisation.
  */
rdvController.post('/',handlerRdv.createRdv)
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

rdvController.delete('/:id',handlerRdv.deleteRdv)
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
rdvController.put('/:id', handlerRdv.updateRdv)