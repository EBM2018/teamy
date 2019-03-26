const { Router } = require('express');

const router = new Router();

// Require controller modules.
const userController = require('./userController');
const userMiddleware = require('./middleware');

/**
 * @api {get} /users/ Get all users
 * @apiName GetAllUsers
 * @apiGroup User
 * @apiDescription Returns a JSON containing all the existing users,
 * but no their credentials or mail address, for privacy purposes
 *
 * @apiSuccessExample {json} Success-Response:
 * [
 * {
 *        "listGroup": [],
 *        "_id": "5c88dad2f3081b001e3f3934",
 *        "name": "Malnoury",
 *        "last_name": "Nathan",
 *        "isProf": false,
 *        "__v": 0
 *    },
 * {
 *        "listGroup": [],
 *        "_id": "5c90c6d4c6de40001f6a9c61",
 *        "name": "Nans",
 *        "last_name": "Dumortier",
 *        "isProf": false,
 *        "__v": 0
 *    },
 * {
 *        "listGroup": [],
 *        "_id": "5c912454719b5c001e8d32f2",
 *        "name": "Bourdeaud'Huy",
 *        "last_name": "Thomas",
 *        "isProf": false,
 *        "__v": 0
 *    }
 * ]
 */
router.get('/', userMiddleware.filterGetAll, userController.all);

/**
 * @api {get} /users/students Get all students
 * @apiName GetAllStudents
 * @apiGroup User
 * @apiDescription Returns a JSON containing all the existing users who have "isProf":false
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * [
 * {
 *        "listGroup": [],
 *        "_id": "5c88dad2f3081b001e3f3934",
 *        "name": "Malnoury",
 *        "last_name": "Nathan",
 *        "isProf": false,
 *        "__v": 0
 *    },
 * {
 *        "listGroup": [],
 *        "_id": "5c90c6d4c6de40001f6a9c61",
 *        "name": "Nans",
 *        "last_name": "Dumortier",
 *        "isProf": false,
 *        "__v": 0
 *    }
 * ]
 */
router.get('/students', userMiddleware.filterStudents, userController.eleve);

/**
 * @api {get} /users/teachers Get all Teachers
 * @apiName GetAllTeachers
 * @apiGroup User
 * @apiDescription Returns a JSON containing all the existing users who have "isProf":true
 *
 * @apiSuccessExample {json} Success-Response:
 * [
 * {
 *        "listGroup": [],
 *        "_id": "5c912488719b5c001e8d32f3",
 *        "name": "Bourdeaud'Huy",
 *        "last_name": "Thomas",
 *        "isProf": true,
 *        "__v": 0
 *    }
 * ]
 */
router.get('/teachers', userMiddleware.filterTeacher, userController.prof);

/**
 * @api {post} /users/newUser Create a new user
 * @apiName CreateUser
 * @apiGroup User
 * @apiDescription Returns a JSON containing all the existing users who have "isProf":true
 *
 * @apiParam {json} user An object containing all the info on the new user
 * @apiParamExample {json} Request-Example:
 * {
 *     "name": "Nans",
 *     "last_name": "Dumortier",
 *     "mailAddress": "notyoutbusiness@gmail.com",
 *     "hashPassword" : "insertHashHere",
 *     "salt": "saltHere",
 *     "isProf": false
 *     # listgroup is not required
 * }
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "listGroup": [],
 *     "_id": "5c90c6d4c6de40001f6a9c61",
 *     "name": "Nans",
 *     "last_name": "Dumortier",
 *     "mailAddress": "notyoutbusiness@gmail.com",
 *     "hashPassword": "insertHashHere",
 *     "salt": "saltHere",
 *     "isProf": false,
 *     "__v": 0
 * }
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
 * @apiDescription Return the JSON con{
    "name": "Nans",
    "last_name": "Dumortier",
    "mailAddress": "notyoutbusiness@gmail.com",
    "hashPassword" : "insertHashHere",
    "salt": "saltHere",
    "isProf": false
}taining the updated info of the user
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
 * @api {get} /users/:UserId/isTeacher Check if a user is a teacher by id
 * @apiName isProfById
 * @apiGroup User
 * @apiDescription Returns a boolean
 *
 * @apiSuccessExample {String} Success-Response:
 * true
 */
router.get('/:UserId/isTeacher', userController.checkIfProf);

module.exports = router;
