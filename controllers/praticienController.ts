import { Router } from "express";
import handlerPraticien from "~~/handler/praticien.handler";
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
praticienController.get('/',handlerPraticien.getPraticiens)
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
praticienController.get('/:id',handlerPraticien.getPraticiensById)
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
  *         default:  {"praticiens": {"td_activite": "a"}, "users":{"td_lastname": "a", "td_firstname": "a","td_birthday": "2000-06-31","td_email":"a@a.com", "td_password":"a","td_phone": 11, "td_isActif": true }} 
  *      responses:
  *        200:
  *          description: Create a new patient.
 */
praticienController.post('/',handlerPraticien.createPraticien)
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

praticienController.delete('/:id',handlerPraticien.deletePraticien)
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
  *         default:  {"praticiens": {"td_activite": "OUIIIIIIIIIIIIIII"}, "users":{"td_lastname": "a", "td_firstname": "a","td_birthday": "2000-06-31","td_email":"a@a.com", "td_password":"a","td_phone": 11, "td_isActif": true }} 
  *      responses:
  *        200:
  *          description: Update the user of given id.
  */
praticienController.put('/:UserId', handlerPraticien.updatePraticien)