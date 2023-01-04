import { Router } from "express";
import handlerRole  from "~~/handler/role.handler";
export const roleController = Router();
/**
 * @swagger
 * tags:
 *      name: role
 *      description: Manage role
 */

/**
 * @openapi
 * /api/role:
 *   get:
 *      tags: [role]
 *      description: Welcome to swagger-jsdoc!
 *      responses:
 *        200:
 *          description: Get the list of all praticiens.
 */
roleController.get('/',handlerRole.getRoles)
/**
 * @openapi
 * /api/role/{id}:
 *   get:
 *      tags: [role]
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
roleController.get('/:id',handlerRole.getRoleById)
/**
   * @openapi
  * /api/role:
  *  post:
  *      tags: [role]
  *      description: Create a role
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
roleController.post('/',handlerRole.createRole)
/**
 * @openapi
 * /api/role/{id}:
 *   delete:
 *      tags: [role]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: delete one specifique user.
 */

roleController.delete('/:id',handlerRole.deleteRole)
/**
 * @openapi
 * /api/role/{id}:
 *  put:
  *      tags: [role]
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
roleController.put('/:id', handlerRole.updateRole)