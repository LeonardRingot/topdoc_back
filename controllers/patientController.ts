import { Router } from "express";
import handlerPatient from "~~/handler/patient.handler";
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
patientController.get('/',handlerPatient.getPatients)
/**
 * @openapi
 * /api/patients:
 *   post:
 *      tags: [Patients]
 *      description: Create a candidate
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default:  {"td_firstname": "elo","td_lastname": "a","td_birthday": "1999-01-01"}
  *      responses:
  *        200:
  *          description: Create a new patient.
 */
patientController.post('/',handlerPatient.createPatient)