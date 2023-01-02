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
 *      description: Create a Patient
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default:  {"patients": {"td_patient": "a", "td_lastname": "a", "td_firstname": "a","td_birthday": "2000-06-31","td_email":"a@a.com", "td_password":"a","td_phone": 11, "td_isActif": true}, "users":{"td_lastname": "a", "td_firstname": "a","td_birthday": "2000-06-31","td_email":"a@a.com", "td_password":"a","td_phone": 11, "td_isActif": true }} 
  *      responses:
  *        200:
  *          description: Create a new patient.
 */
patientController.post('/',handlerPatient.createPatient)