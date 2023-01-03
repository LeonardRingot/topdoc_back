import { Router } from "express";
import handlerPlageHoraire  from "~~/handler/plage_horaire.handler";
export const plagehoraireController = Router();
/**
 * @swagger
 * tags:
 *      name: plagehoraires
 *      description: Manage Plage Horaires
 */

/**
 * @openapi
 * /api/plagehoraires:
 *   get:
 *      tags: [plagehoraires]
 *      description: Welcome to swagger-jsdoc!
 *      responses:
 *        200:
 *          description: Get the list of all praticiens.
 */
plagehoraireController.get('/',handlerPlageHoraire.getPlageHoraires)
/**
 * @openapi
 * /api/plagehoraires/{id}:
 *   get:
 *      tags: [plagehoraires]
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
plagehoraireController.get('/:PlanningId',handlerPlageHoraire.getPlageHoraireById)
/**
   * @openapi
  * /api/plagehoraires:
  *  post:
  *      tags: [plagehoraires]
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
plagehoraireController.post('/',handlerPlageHoraire.createPlageHoraire)
/**
 * @openapi
 * /api/plagehoraires/{id}:
 *   delete:
 *      tags: [plagehoraires]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: delete one specifique user.
 */

plagehoraireController.delete('/:PlanningId',handlerPlageHoraire.deletePlageHoraire)
/**
 * @openapi
 * /api/plagehoraires/{id}:
 *  put:
  *      tags: [plagehoraires]
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
plagehoraireController.put('/:PlanningId', handlerPlageHoraire.updatePlageHoraire)