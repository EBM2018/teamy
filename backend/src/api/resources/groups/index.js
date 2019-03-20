const { Router } = require('express');

const router = new Router();
const groupController = require('./groupsController');

/**
 * @api {get} /groups/ Returns all the groups created
 * @apiName GetAllGroup
 * @apiGroup Groups
 * @apiDescription Returns a JSON containing all the existing Groups
 *
 * @apiSuccessExample {json} Success-Response:
 * [
 * {
 *        "repartitions": [
 *            "modified group"
 *        ],
 *        "_id": "5c90ae4860a2d8001eff209f",
 *        "label": "new group",
 *        "cours": "EBM",
 *        "__v": 0
 *    },
 * {
 *        "repartitions": [],
 *        "_id": "5c90b0e4c793cb001e66c9fb",
 *        "label": "Nouveau Groupe pour le supprimer",
 *        "cours": "WhoopsieLand",
 *        "__v": 0
 *    }
 * ]
 */
router.get('/', groupController.getAll);

/**
 * @api {get} /groups/:GroupId Return the info of one goup by ID
 * @apiName GetGroupById
 * @apiGroup Groups
 * @apiDescription Returns a JSON containing the info
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "repartitions": [
 *         "info about group 1"
 *     ],
 *     "_id": "5c90ae4860a2d8001eff209f",
 *     "label": "new group",
 *     "cours": "EBM",
 *     "__v": 0
 * }
 */
router.get('/:GroupId', groupController.getById);

/**
 * @api {post} /groups/new/ Create new groups
 * @apiName CreateGroup
 * @apiGroup Groups
 * @apiDescription Create a new repartiton, return the json of the Repartition created
 *
 * @apiParamExample {json} Request-example:
 * {
 *    "label": "Nouveau Groupe",
 *    "repartitions": [],
 *    "cours":"EBM" # optionnal
 * }
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "repartitions": [],
 *     "_id": "5c90ae4860a2d8001eff209f",
 *     "label": "Nouveau Groupe",
 *     "cours": "EBM",
 *     "__v": 0
 * }
 */
router.post('/new', groupController.createNew);

/**
 * @api {get} /groups/repartitions/:GroupId Returns all the repartitions within a groups
 * @apiName GetRepartitionsByGroupId
 * @apiGroup Groups
 * @apiDescription Returns a JSON with the groups in the given groups
 * @apiSuccessExample {json} Success-Response:
 * [
 * {
 *        "repartitions": [
 *            "modified group"
 *        ],
 *        "_id": "5c90ae4860a2d8001eff209f"
 *    }
 * ]
 */
router.get('/repartitions/:GroupId', groupController.getRepartitionById);

/**
 * @api {delete} /groups/:GroupId Delete Repartition On ID
 * @apiName DeleteOnID
 * @apiGroup Groups
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
router.delete('/:GroupId', groupController.delete);

/**
 * @api {put} groups/:GroupId modifies a group
 * @apiName PutOnId
 * @apiGroup Groups
 * @apiDescription Modifies the group, then returns the modified json
 *
 * @apiParamExample {json} Request-example:
 *{
 *    "repartitions": ["modified group"],
 *    "label": "new group"
 *    # absent fields won't be changed
 *}
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "repartitions": [
 *         "modified group"
 *     ],
 *     "_id": "5c90ae4860a2d8001eff209f",
 *     "label": "new group",
 *     "cours": "EBM", # unchanged
 *     "__v": 0
 * }
 */
router.put('/:GroupId', groupController.update);

module.exports = router;
