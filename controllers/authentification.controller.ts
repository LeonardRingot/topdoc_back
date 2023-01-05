import { Router } from "express";
import handlerAuth from "~~/handler/authentification.handler"
export const authentificationController = Router();

/**
 * @swagger
 * tags:
 *      name: Authentification
 *      description: Manage authentification
 */

/**
  * @openapi
  * /api/auth/login:
  *  post:
  *      tags: [Authentification]
  *      description: Login
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {"td_email": "string", "td_password": "string"}
  *      responses:
  *        200:
  *          description: Login. Returns tokens if successful login.
  */
 authentificationController.post('/', handlerAuth)