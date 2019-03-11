const { Router } = require('express');

const router = new Router();
const controller = require('./profGroupController');

/**
 * @api {get} /prof-group/ Get all the prof and their groups
 * @apiName GetAllProfGroup
 * @apiGroup ProfGroup
 * @apiDescription Returns a JSON containing all the existing Prof-group
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
router.get('/', controller.getAll);

/**
 * @api {post} /prof-group/new Create new prof-group entry
 * @apiName CreateNewProfGroup
 * @apiGroup ProfGroup
 * @apiDescription Returns a JSON containing the created Prof-group
 *
 * @apiParamExample {json} Request-Example:
 * {
 *  "idProf":"5c7fbd47efcb020017b52dec", # the user should exist and be a teacher for it to work
 *  "idRepartition":"5c75051a292b402968fsdfg78"
 *}
 * @apiSuccessExample {json} Success-Response:
 *  [
 *  {
 *         "_id": "5c863ba15cb955001e71aff6",
 *         "idProf": "5c7fbd47efcb020017b52dec",
 *         "idRepartition": "5c75051a292b402968fsdfg78",
 *         "__v": 0
 *     }
 *  ]
 */
router.post('/new', controller.newProfGroup);
/**
 * @api {get} /prof-group/:idProf Get a prof info by ProfId -- NOT LINE ID
 * @apiName GetByProfId
 * @apiGroup ProfGroup
 * @apiDescription Returns a JSON containing the Prof-group entry
 * @apiSuccessExample {json} Success-Response:
 * [
 * {
 *        "_id": "5c863ba15cb955001e71aff6",
 *        "idProf": "5c7fbd47efcb020017b52dec",
 *        "idRepartition": "5c75051a292b402968fsdfg78",
 *        "__v": 0
 *    }
 * ]
 */
router.get('/:idProf', controller.getRepartition);

/**
 * @api {delete} /prof-group/:idProf delete a prof groups ids by its Line ID -- NOT PROF ID
 * @apiName deleteOnId
 * @apiGroup ProfGroup
 * @apiDescription Returns a JSON containing the Prof-group entry
 * @apiSuccessExample {json} Success-Response:
 * [
 * {
 *        "_id": "5c863ba15cb955001e71aff6",
 *        "idProf": "5c7fbd47efcb020017b52dec",
 *        "idRepartition": "5c75051a292b402968fsdfg78",
 *        "__v": 0
 *    }
 * ]
 */
router.delete('/:id', controller.deleteOnLineId);

module.exports = router;
