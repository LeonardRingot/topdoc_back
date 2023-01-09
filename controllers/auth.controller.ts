import { Router } from "express";
import {handlerLogin} from "~~/handler/auth.handler"
export const authController = Router();

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
  *         default: {"td_email": "cunmock@gmail.com", "td_password": "e"}
  *      responses:
  *        200:
  *          description: Login. Returns tokens if successful login.
  */
 authController.post('/login', handlerLogin.token)