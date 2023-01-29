import { Router } from "express";
import { patientHandler } from "~~/injection";
export const patientController = Router();
/**
 * @swagger
 * tags:
 *      name: Patients
 *      description: Manage users
 */

/**
 * @openapi
 * /api/patients:
 *   get:
 *      tags: [Patients]
 *      description: Welcome to swagger-jsdoc!
 *      responses:
 *        200:
 *          description: Get the list of all users.
 */
patientController.get('/',patientHandler.getPatients)
/**
 * @openapi
 * /api/patients/{id}:
 *   get:
 *      tags: [Patients]
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
patientController.get('/:id',patientHandler.getPatientById)
/**
 * @openapi
 * /api/patients:
 *   post:
 *      tags: [Patients]
 *      description: Create a Patient
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default:  {"numbervitalCode": "18", "lastname": "a", "firstname": "a","birthday": "2000-06-31","email":"a@amdr.com", "password":"patient","phone": 113, "address":"address","city":"vccity","zipCode":"62240" ,"isActif": true}
  *      responses:
  *        200:
  *          description: Create a new patient.
 */
patientController.post('/',patientHandler.createPatient)
/**
 * @openapi
 * /api/patients/{id}:
 *   delete:
 *      tags: [Patients]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: delete one specifique user.
 */
patientController.delete('/:id',patientHandler.deletePatient)
/**
 * @openapi
 * /api/patients/{id}:
 *  put:
  *      tags: [Patients]
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
  *         default:  {"numbervitalCode": "18", "lastname": "a", "firstname": "a","birthday": "2000-06-31","email":"a@a.com", "password":"a","phone": 11, "isActif": true }
  *      responses:
  *        200:
  *          description: Update the user of given id.
  */
patientController.put('/:UserId', patientHandler.updatePatient)