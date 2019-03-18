const { Router } = require('express');

const router = new Router();
const repartitionController = require('./repartitionController');

/**
 * @api {get} /repartition/ Returns all the repartition created
 * @apiName GetAllRepartition
 * @apiGroup Repartition
 * @apiDescription Returns a JSON containing all the existing Repartitions
 *
 * @apiSuccessExample {json} Success-Response:
 *
 * [
 * {
 *        "group": [
 *            "hehe"
 *        ],
 *        "_id": "5c8f52721de2c1001eb892e8",
 *        "label": "groupe de test",
 *        "__v": 0
 *    },
 * {
 *        "group": [],
 *        "_id": "5c8f52ac1de2c1001eb892e9",
 *        "label": "Nouveau Groupe",
 *        "__v": 0
 *    }
 * ]
 */
router.get('/', repartitionController.getAll);

/**
 * @api {post} /repartition/new/ Create new repartition
 * @apiName CreateRepartition
 * @apiGroup Repartition
 * @apiDescription Create a new repartiton, return the json of the Repartition created
 *
 * @apiParamExample {json} Request-example:
 * {
 *  "label": "Nouveau Groupe",
 *  "group": []
 * }
 *
 * @apiSuccessExample {json} Success-Response:
 *{
 *    "group": [],
 *    "_id": "5c8f52ac1de2c1001eb892e9",
 *    "label": "Nouveau Groupe",
 *    "__v": 0
 *}
 */
router.post('/new', repartitionController.createNew);

/**
 * @api {get} /repartition/group/:RepartitionId Returns all the groups within a repartition
 * @apiName GetGroupByRepartitionId
 * @apiGroup Repartition
 * @apiDescription Returns a JSON with the groups in the given repartition
 *
 * @apiSuccessExample {json} Success-Response:
 *
 * [
 * {
 *        "group": ["info here"],
 *        "_id": "5c8f52ac1de2c1001eb892e9"
 *    }
 * ]
 */
router.get('/group/:RepartitionId', repartitionController.getGroupById);

/**
 * @api {delete} /:RepartitionId Delete Repartition On ID
 * @apiName DeleteOnID
 * @apiGroup Repartition
 * @apiDescription Delete the line, send a json to confirm the deletion
 *
 * @apiSuccessExample {json} Success-Response:
 *
 * {
 *     "n": 1,
 *     "ok": 1,
 *     "deletedCount": 1
 * }
 */
router.delete('/:RepartitionId', repartitionController.delete);

module.exports = router;
