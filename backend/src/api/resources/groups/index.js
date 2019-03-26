const { Router } = require('express');

const router = new Router();
const groupsController = require('./groupsController');

/**
 * @api {get} /groups/ Returns all the groups created
 * @apiName GetAllGroups
 * @apiGroup Groups
 * @apiDescription Returns a JSON containing all the existing Groups
 *
 * @apiSuccessExample {json} Success-Response:
 * [
 * {
 *        "_id": "5c99dc8038ea0b001ee923e5",
 *        "groupName": "Alternants",
 *        "seances": [
 *            {
 *                "repartition": [
 *                    {
 *                        "arrayStudentId": [
 *                            "id1",
 *                            "id2"
 *                        ],
 *                        "_id": "5c99dc8038ea0b001ee923ea",
 *                        "groupName": "groupe N 1"
 *                    },
 *                    {
 *                        "arrayStudentId": [
 *                            "id3",
 *                            "id4",
 *                            "id5"
 *                        ],
 *                        "_id": "5c99dc8038ea0b001ee923e9",
 *                        "groupName": "groupe N 2"
 *                    },
 *                    {
 *                        "arrayStudentId": [
 *                            "id6"
 *                        ],
 *                        "_id": "5c99dc8038ea0b001ee923e8",
 *                        "groupName": "le mec qui est tout seul"
 *                    }
 *                ],
 *                "_id": "5c99dc8038ea0b001ee923e7",
 *                "label": "Analyse du Vecu",
 *                "startingDate": "2019-03-10T08:30:00.000Z",
 *                "finishingDate": "2019-03-10T11:30:00.000Z"
 *            },
 *            {
 *                "repartition": [],
 *                "_id": "5c99dc8038ea0b001ee923e6",
 *                "label": "Anglais"
 *            }
 *        ],
 *        "__v": 0
 *    },
 * {
 *        "_id": "5c99e05838ea0b001ee923eb",
 *        "groupName": "EBM",
 *        "seances": [
 *            {
 *                "repartition": [
 *                    {
 *                        "arrayStudentId": [
 *                            "id1",
 *                            "id2"
 *                        ],
 *                        "_id": "5c99e05838ea0b001ee923ef",
 *                        "groupName": "teamy"
 *                    },
 *                    {
 *                        "arrayStudentId": [
 *                            "id3",
 *                            "id4",
 *                            "id5"
 *                        ],
 *                        "_id": "5c99e05838ea0b001ee923ee",
 *                        "groupName": "iRate"
 *                    },
 *                    {
 *                        "arrayStudentId": [
 *                            "id6"
 *                        ],
 *                        "_id": "5c99e05838ea0b001ee923ed",
 *                        "groupName": "tenugui"
 *                    }
 *                ],
 *                "_id": "5c99e05838ea0b001ee923ec",
 *                "label": "Fil Rouge",
 *                "startingDate": "2019-03-10T13:30:00.000Z",
 *                "finishingDate": "2019-03-10T17:30:00.000Z"
 *            }
 *        ],
 *        "__v": 0
 *    }
 * ]
 */
router.get('/', groupsController.getAll);

/**
 * @api {get} /groups/:GroupId Return the info of one goup by ID
 * @apiName GetOneGroupById
 * @apiGroup Groups
 * @apiDescription Returns a JSON containing all the infos
 * @apiSuccessExample {json} Success-Response:
 * {
 *    "_id": "5c99e05838ea0b001ee923eb",
 *    "groupName": "EBM",
 *    "seances": [
 *        {
 *            "repartition": [
 *                {
 *                    "arrayStudentId": [
 *                        "id1",
 *                        "id2"
 *                    ],
 *                    "_id": "5c99e05838ea0b001ee923ef",
 *                    "groupName": "teamy"
 *                },
 *                {
 *                    "arrayStudentId": [
 *                        "id3",
 *                        "id4",
 *                        "id5"
 *                    ],
 *                    "_id": "5c99e05838ea0b001ee923ee",
 *                    "groupName": "iRate"
 *                },
 *                {
 *                    "arrayStudentId": [
 *                        "id6"
 *                    ],
 *                    "_id": "5c99e05838ea0b001ee923ed",
 *                    "groupName": "tenugui"
 *                }
 *            ],
 *            "_id": "5c99e05838ea0b001ee923ec",
 *            "label": "Fil Rouge",
 *            "startingDate": "2019-03-10T13:30:00.000Z",
 *            "finishingDate": "2019-03-10T17:30:00.000Z"
 *        }
 *    ],
 *    "__v": 0
 *}
 */
router.get('/:GroupId', groupsController.getById);

/**
 * @api {post} /groups/new/ Create new groups
 * @apiName CreateGroup
 * @apiGroup Groups
 * @apiDescription Create a new group.
 * you can just create it by passing a groupName.
 * return the json of the Group created
 *
 * @apiParamExample {json} Request-example:
 * {
 *    "groupName": "Alternants",
 *    "seances": [
 *      {
 *        "label":"Analyse du Vecu",
 *        "startingDate": "03/10/2019 08:30",
 *        "finishingDate": "03/10/2019 11:30",
 *        "repartition": [
 *          {
 *            "groupName":"groupe N 1",
 *            "arrayStudentId": ["id1", "id2"]
 *          },
 *          {
 *          "groupName":"groupe N 2",
 *          "arrayStudentId": ["id3", "id4", "id5"]
 *          },
 *          {
 *          "groupName":"le mec qui est tout seul",
 *          "arrayStudentId": ["id6"]
 *          }
 *        ]
 *     },
 *    {
 *    "label":"Anglais",
 *    "repartition":[]
 *    }
 *    ]
 *}
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *    "_id": "5c99dc8038ea0b001ee923e5",
 *    "groupName": "Alternants",
 *    "seances": [
 *        {
 *            "_id": "5c99dc8038ea0b001ee923e7",
 *            "label": "Analyse du Vecu",
 *            "startingDate": "2019-03-10T08:30:00.000Z",
 *            "finishingDate": "2019-03-10T11:30:00.000Z",
 *            "repartition": [
 *                {
 *                    "arrayStudentId": [
 *                        "id1",
 *                        "id2"
 *                    ],
 *                    "_id": "5c99dc8038ea0b001ee923ea",
 *                    "groupName": "groupe N 1"
 *                },
 *                {
 *                    "arrayStudentId": [
 *                        "id3",
 *                        "id4",
 *                        "id5"
 *                    ],
 *                    "_id": "5c99dc8038ea0b001ee923e9",
 *                    "groupName": "groupe N 2"
 *                },
 *                {
 *                    "arrayStudentId": [
 *                        "id6"
 *                    ],
 *                    "_id": "5c99dc8038ea0b001ee923e8",
 *                    "groupName": "le mec qui est tout seul"
 *                }
 *            ]
 *        },
 *        {
 *            "_id": "5c99dc8038ea0b001ee923e6",
 *            "label": "Anglais",
 *            "repartition": []
 *        }
 *    ],
 *    "__v": 0
 *}
 */
router.post('/new', groupsController.createNew);

/**
 * @api {get} /groups/:GroupId/seances/ Returns all the seances made in a group
 * @apiName GetAllSeancesInGroupById
 * @apiGroup Groups
 * @apiDescription Returns an array of seances, empty array otherwise
 * @apiSuccessExample {json} Success-Response:
 * [
 * {
 *        "repartition": [
 *            {
 *                "arrayStudentId": [
 *                    "id1",
 *                    "id2"
 *                ],
 *                "_id": "5c99e05838ea0b001ee923ef",
 *                "groupName": "teamy"
 *            },
 *            {
 *                "arrayStudentId": [
 *                    "id3",
 *                    "id4",
 *                    "id5"
 *                ],
 *                "_id": "5c99e05838ea0b001ee923ee",
 *                "groupName": "iRate"
 *            },
 *            {
 *                "arrayStudentId": [
 *                    "id6"
 *                ],
 *                "_id": "5c99e05838ea0b001ee923ed",
 *                "groupName": "tenugui"
 *            }
 *        ],
 *        "_id": "5c99e05838ea0b001ee923ec",
 *        "label": "Fil Rouge",
 *        "startingDate": "2019-03-10T13:30:00.000Z",
 *        "finishingDate": "2019-03-10T17:30:00.000Z"
 *    }
 * ]
 */
router.get('/:GroupId/seances/', groupsController.getSeances);

/**
 * @api {get} /groups/:GroupId/seances/:SeanceId Returns all the seances made in a groups
 * @apiName GetOneSeanceInGroupById
 * @apiGroup Groups
 * @apiDescription Returns an object containing the info about a seance within a group
 * @apiSuccessExample {json} Success-Response:
 * {
 *    "repartition": [
 *        {
 *            "arrayStudentId": [
 *                "id1",
 *                "id2"
 *            ],
 *            "_id": "5c99e05838ea0b001ee923ef",
 *            "groupName": "teamy"
 *        },
 *        {
 *            "arrayStudentId": [
 *                "id3",
 *                "id4",
 *                "id5"
 *            ],
 *            "_id": "5c99e05838ea0b001ee923ee",
 *            "groupName": "iRate"
 *        },
 *        {
 *            "arrayStudentId": [
 *                "id6"
 *            ],
 *            "_id": "5c99e05838ea0b001ee923ed",
 *            "groupName": "tenugui"
 *        }
 *    ],
 *    "_id": "5c99e05838ea0b001ee923ec",
 *    "label": "Fil Rouge",
 *    "startingDate": "2019-03-10T13:30:00.000Z",
 *    "finishingDate": "2019-03-10T17:30:00.000Z"
 *}
 */
router.get('/:GroupId/seances/:SeanceId', groupsController.getOneSeance);

/**
 * @api {get} /groups/:GroupId/seances/:SeanceId/repartition/ Returns all
 * the repartitions made in a seance
 * @apiName GetAllRepartitionsInSeance
 * @apiGroup Groups
 * @apiDescription Returns an array of repartitions, empty array otherwise
 * @apiSuccessExample {json} Success-Response:
 * [
 * {
 *        "arrayStudentId": [
 *            "id1",
 *            "id2"
 *        ],
 *        "_id": "5c99e05838ea0b001ee923ef",
 *        "groupName": "teamy"
 *    },
 * {
 *        "arrayStudentId": [
 *            "id3",
 *            "id4",
 *            "id5"
 *        ],
 *        "_id": "5c99e05838ea0b001ee923ee",
 *        "groupName": "iRate"
 *    },
 * {
 *        "arrayStudentId": [
 *            "id6"
 *        ],
 *        "_id": "5c99e05838ea0b001ee923ed",
 *        "groupName": "tenugui"
 *    }
 * ]
 */
router.get('/:GroupId/seances/:SeanceId/repartition/', groupsController.getRepartition);

/**
 * @api {get} /groups/GroupId/seances/:SeanceId/repartition/:RepartitionId Returns the info about
 * 1 sub-group within a repartition
 * @apiName GetOneRepartitionInSeance
 * @apiGroup Groups
 * @apiDescription Returns an object containing the info of the sub-group  by Id
 * @apiSuccessExample {json} Success-Response:
 * {
 *    "arrayStudentId": [
 *        "id1",
 *        "id2"
 *    ],
 *    "_id": "5c99e05838ea0b001ee923ef",
 *    "groupName": "teamy"
 *}
 */
router.get('/:GroupId/seances/:SeanceId/repartition/:RepartitionId', groupsController.getOneRepartition);

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
router.delete('/:GroupId', groupsController.delete);

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
router.put('/:GroupId', groupsController.update);

// TODO CRUD FOR GROUPS/SEANCE
// TODO CRUD FOR GROUPS/SEANCE/REPARTITION

module.exports = router;
