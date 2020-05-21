var express = require('express');
var router = express.Router();
var usersController = require('../controller/usersController')
/* GET home page. */
router.route('/')
/**
* @swagger
*
* /users:
*   get:
*     description: List all the registered users
*     produces:
*       - application/json
*     responses:
*       200:
*         description: The user is created successfully
*         content:
*              application/json:
*                  schema:
*                      ArrayOfUsers:
*                           type: array
*                           items:
*                              type: object
*                              properties:
*                                  id:
*                                      type: string
*                                  correo:
*                                      type: string
*                                  password:
*                                      type: string 
*                           example:
*                              - correo: pepito@pepe.com
*                                password: perez
*                                id: 1121321
*       500:
*         description: Server error
*/
    .get((req, res) => usersController.getUsers(req, res))
/**
 * @swagger
 *
 * /users:
 *   delete:
 *     description: Delete all users
 *     responses:
 *       204:
 *         description: success
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
    .delete((req, res) => usersController.deleteUsers(req,res))
/**
 * @swagger
 *
 * /users:
 *   post:
 *     description: User creation
 *     produces:
 *       - application/json
 *     parameters:
 *       -  in: "body"
 *          name: "body"
 *          description: "User required data"
 *          required: true
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *                required: true
 *              password:
 *                type: string
 *                required: true
 *     responses:
 *       201:
 *         description: The user is created successfully   
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
    .post((req, res) => usersController.createUser(req, res))
    
router.route('/:id')
/**
 * @swagger
 *
 * /users/{id}:
 *   get:
 *     description: Get a registered user
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *              type: string
 *              required: true
 *              description: Id parameter to search the user in bd
 *     responses:
 *       200:
 *         description: The user is returned successfully
 *         content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                          password:
 *                              type: string 
 *                          id:
 *                              type: string
 *       500:
 *         description: Server error
 */
  .get((req, res) => usersController.getUserById(req, res))/**
  * @swagger
  *
  * /users/{id}:
  *   put:
  *     description: Update a specific user
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *            type: string
  *            required: true
  *            description: Username parameter to search the user in bd
  *       -  in: "body"
  *          name: "body"
  *          description: "User required data"
  *          required: true
  *          schema:
  *            type: object
  *            properties:
  *              email:
  *                type: string
  *                required: false
  *              password:
  *                type: string
  *                required: false
  *     responses:
  *       202:
  *         description: User updated
  *       400:
  *         description: Bad request
  *       500:
  *         description: Server error
  */


  .put((req, res) => usersController.updateUser(req, res))
/**
 * @swagger
 *
 * /users/{id}:
 *   delete:
 *     description: Delete a specific user
 *     parameters:
 *       - in: path
 *         name: username
 *         schema:
 *              type: string
 *              required: true
 *              description: Username parameter to search the user in bd
 *     responses:
 *       204:
 *         description: User deleted
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
  .delete((req, res) => usersController.deleteUser(req, res))

module.exports = router;
