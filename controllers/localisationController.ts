import { Router } from "express";
import handlerLocalisation  from "~~/handler/localisation.handler";
export const localisationController = Router();
/**
 * @swagger
 * tags:
 *      name: Localisations
 *      description: Manage Localisations
 */

/**
 * @openapi
 * /api/localisations:
 *   get:
 *      tags: [Localisations]
 *      description: Welcome to swagger-jsdoc!
 *      responses:
 *        200:
 *          description: Get the list of all praticiens.
 */
localisationController.get('/',handlerLocalisation.getLocalisations)
/**
 * @openapi
 * /api/localisations/{id}:
 *   get:
 *      tags: [Localisations]
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
localisationController.get('/:id',handlerLocalisation.getLocalisationsById)
/**
   * @openapi
  * /api/localisations:
  *  post:
  *      tags: [Localisations]
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
localisationController.post('/',handlerLocalisation.createLocalisation)
/**
 * @openapi
 * /api/localisations/{id}:
 *   delete:
 *      tags: [Localisations]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: delete one specifique user.
 */

localisationController.delete('/:id',handlerLocalisation.deleteLocalisation)
/**
 * @openapi
 * /api/localisations/{id}:
 *  put:
  *      tags: [Localisations]
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
localisationController.put('/:id', handlerLocalisation.updateLocalisation)