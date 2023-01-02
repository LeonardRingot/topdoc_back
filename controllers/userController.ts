import { Router } from "express";
import handlerUser from "~~/handler/user.handler";
export const userController = Router();
/**
 * @swagger
 * tags:
 *      name: Users
 *      description: Manage users
 */

/**
 * @openapi
 * /api/users:
 *   post:
 *      tags: [Users]
 *      description: Create a User
 *      consumes:
 *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {"users":{"td_email":"test@mail.com", "td_password":"string","td_phone":90, "td_isActif": true }}
  *      responses:
  *        200:
  *          description: Create a new User.
 */
userController.post('/',handlerUser.createUser)
/**
 * @openapi
 * /api/users:
 *   get:
 *      tags: [Users]
 *      description: Welcome to swagger-jsdoc!
 *      responses:
 *        200:
 *          description: Get the list of all users.
 */
userController.get('/',handlerUser.getUsers)