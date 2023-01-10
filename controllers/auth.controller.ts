import { Router } from "express";
import { authHandler } from "~~/injection";
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
  *         default: {"td_email": "a@a.com", "password": "a"}
  *      responses:
  *        200:
  *          description: Login. Returns tokens if successful login.
  */
 authController.post('/login', authHandler.login)
 /**
  * @openapi
  * /api/auth/token:
  *  post:
  *      tags: [Authentification]
  *      description: Token
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {"refreshToken": "string"}
  *      responses:
  *        200:
  *          description: Token. Refresh tokens.
  */
authController.post('/token', authHandler.token)