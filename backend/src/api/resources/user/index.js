const { Router } = require('express');

const router = new Router();

// Require controller modules.
const userController = require('./userController');
const userMiddleware = require('./middleware');

/**
 * @api {get} /users/ Get all users
 * @apiName GetAllUsers
 * @apiGroup User
 * @apiDescription Returns a JSON containing all the existing users
 *
 * @apiSuccessExample {json} Success-Response:
 *[
 *{
 *       "listGroup": [],
 *       "_id": "5c7fbd5980a64f0017fb605b",
 *       "name": "Dumortier",
 *       "last_name": "Nans",
 *       "isProf": true,
 *       "__v": 0
 *   },
 *{
 *       "listGroup": [],
 *       "_id": "5c7fbf9c80a64f0017fb605c",
 *       "name": "Chion",
 *       "last_name": "Valentin",
 *       "isProf": false,
 *       "__v": 0
 *   }
 *]
 */
router.get('/', userMiddleware.filterGetAll, userController.all);

/**
 * @api {get} /users/student Get all students
 * @apiName GetAllStudents
 * @apiGroup User
 * @apiDescription Returns a JSON containing all the existing users who have "isProf":false
 *
 * @apiSuccessExample {json} Success-Response:
 * [
 *   {
 *       "listGroup": [],
 *       "_id": "5c7fbf9c80a64f0017fb605c",
 *       "name": "Chion",
 *       "last_name": "Valentin",
 *       "isProf": false,
 *       "__v": 0
 *   },
 *   {
 *       "listGroup": [],
 *       "_id": "5c7fbfa780a64f0017fb605d",
 *       "name": "Mottez",
 *       "last_name": "Hugo",
 *       "isProf": false,
 *       "__v": 0
 *   }
 *]
 */
router.get('/students', userController.eleve);

/**
 * @api {get} /users/teachers Get all Teachers
 * @apiName GetAllTeachers
 * @apiGroup User
 * @apiDescription Returns a JSON containing all the existing users who have "isProf":true
 *
 * @apiSuccessExample {json} Success-Response:
 * [
 *{
 *       "listGroup": [],
 *       "_id": "5c7fbd5980a64f0017fb605b",
 *       "name": "Dumortier",
 *       "last_name": "Nans",
 *       "isProf": true,
 *       "__v": 0
 *   },
 *{
 *       "listGroup": [],
 *       "_id": "5c7fbfb980a64f0017fb605e",
 *       "name": "Bourdeaud'Hui",
 *       "last_name": "Thomas",
 *       "isProf": true,
 *       "__v": 0
 *   }
 *]
 */
router.get('/teachers', userController.prof);

/**
 * @api {post} /users/newUser Create a new user
 * @apiName CreateUser
 * @apiGroup User
 * @apiDescription Returns a JSON containing all the existing users who have "isProf":true
 *
 * @apiParam {json} user An object containing all the info on the new user
 * @apiParamExample {json} Request-Example:
 *    {
 *    "name": "Bourdeaud'Hui",
 *    "last_name" :"Thomas",
 *    "isProf": true
 *   }
 *
 * @apiSuccessExample {json} Success-Response:
 *  {
 *   "listGroup": [],
 *   "_id": "5c7fbfb980a64f0017fb605e",
 *   "name": "Bourdeaud'Hui",
 *   "last_name": "Thomas",
 *   "isProf": true,
 *   "__v": 0
 *  }
 */
router.post('/newUser', userController.newUser);

/**
 * @api {get} /users/:UserId Get one user by its Id
 * @apiName GetUserById
 * @apiGroup User
 * @apiDescription Returns a JSON containing the info of the user.
 *
 * @apiSuccessExample {json} Success-Response:
 * [
 * {
 *        "listGroup": [],
 *        "_id": "5c7fbd5980a64f0017fb605b",
 *        "name": "Dumortier",
 *        "last_name": "Nans",
 *        "isProf": true,
 *        "__v": 0
 *    }
 * ]
 */
router.get('/:UserId', userMiddleware.filterGet, userController.getUserById);

/**
 * @api {put} /users/:UserId Change a User
 * @apiName PutUser
 * @apiGroup User
 * @apiDescription Return the JSON containing the updated info of the user
 *
 * @apiSuccessExample {json} Success-Response:
 *  {
 *     "listGroup": [],
 *     "_id": "5c7fbd5980a64f0017fb605b",
 *     "name": "Nans",
 *     "last_name": "Dumortier",
 *     "isProf": false,
 *     "__v": 0
 * }
 */
router.put('/:UserId', userController.editUserById);

/**
 * @api {delete} /users/:UserId Delete a User
 * @apiName DeleteUser
 * @apiGroup User
 * @apiDescription Return the JSON containing the confirmation of deletion
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *    "n": 1,
 *    "ok": 1,
 *    "deletedCount": 1
 *}
 */
router.delete('/:UserId', userController.deleteUserById);

/**
 * @api {get} /users/isTeacher/:UserId Check if a user is a teacher by id
 * @apiName isProfById
 * @apiGroup User
 * @apiDescription Returns a boolean
 *
 * @apiSuccessExample {String} Success-Response:
 * true
 */
router.get('/isTeacher/:UserId', userController.checkIfProf);

module.exports = router;
