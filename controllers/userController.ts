import { Router } from "express";
import { userHandler } from "~~/injection";
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
userController.post('/',userHandler.postUser)
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
userController.get('/',userHandler.getUsers)
/**
 * @openapi
 * /api/users/{id}:
 *   get:
 *      tags: [Users]
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
userController.get('/:id',userHandler.getUserId)
/**
 * @openapi
 * /api/users/{id}:
 *   delete:
 *      tags: [Users]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: delete one specifique user.
 */
userController.delete('/:id',userHandler.deleteUser)
/**
 * @openapi
 * /api/users/{id}:
 *  put:
  *      tags: [Users]
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
  *         default: {    "td_firstname": "a", "td_lastname": "a", "td_birthday": "1999-01-25", "td_email":"pitie@gmail.com", "td_password":"oui", "td_phone":"65", "td_isActif":true}
  *      responses:
  *        200:
  *          description: Update the user of given id.
  */
 userController.put('/:id', userHandler.updateUser)