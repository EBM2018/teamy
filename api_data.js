define({ "api": [
  {
    "type": "delete",
    "url": "/groups/:GroupId/seances/:SeanceId",
    "title": "Delete Seance On ID",
    "name": "DeleteOnID",
    "group": "DeleteRepartition",
    "description": "<p>Delete the Seance, send a json to confirm the deletion</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"n\": 1,\n    \"ok\": 1,\n    \"deletedCount\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/groups/index.js",
    "groupTitle": "DeleteRepartition",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/groups/:GroupId/seances/:SeanceId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/groups/new/",
    "title": "Create new groups",
    "name": "CreateGroup",
    "group": "Groups",
    "description": "<p>Create a new group. you can just create it by passing a groupName. return the json of the Group created</p>",
    "parameter": {
      "examples": [
        {
          "title": "Request-example:",
          "content": "{\n   \"groupName\": \"Alternants\",\n   \"seances\": [\n     {\n       \"label\":\"Analyse du Vecu\",\n       \"startingDate\": \"03/10/2019 08:30\",\n       \"finishingDate\": \"03/10/2019 11:30\",\n       \"repartition\": [\n         {\n           \"groupName\":\"groupe N 1\",\n           \"arrayStudentId\": [\"id1\", \"id2\"]\n         },\n         {\n         \"groupName\":\"groupe N 2\",\n         \"arrayStudentId\": [\"id3\", \"id4\", \"id5\"]\n         },\n         {\n         \"groupName\":\"le mec qui est tout seul\",\n         \"arrayStudentId\": [\"id6\"]\n         }\n       ]\n    },\n   {\n   \"label\":\"Anglais\",\n   \"repartition\":[]\n   }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"_id\": \"5c99dc8038ea0b001ee923e5\",\n   \"groupName\": \"Alternants\",\n   \"seances\": [\n       {\n           \"_id\": \"5c99dc8038ea0b001ee923e7\",\n           \"label\": \"Analyse du Vecu\",\n           \"startingDate\": \"2019-03-10T08:30:00.000Z\",\n           \"finishingDate\": \"2019-03-10T11:30:00.000Z\",\n           \"repartition\": [\n               {\n                   \"arrayStudentId\": [\n                       \"id1\",\n                       \"id2\"\n                   ],\n                   \"_id\": \"5c99dc8038ea0b001ee923ea\",\n                   \"groupName\": \"groupe N 1\"\n               },\n               {\n                   \"arrayStudentId\": [\n                       \"id3\",\n                       \"id4\",\n                       \"id5\"\n                   ],\n                   \"_id\": \"5c99dc8038ea0b001ee923e9\",\n                   \"groupName\": \"groupe N 2\"\n               },\n               {\n                   \"arrayStudentId\": [\n                       \"id6\"\n                   ],\n                   \"_id\": \"5c99dc8038ea0b001ee923e8\",\n                   \"groupName\": \"le mec qui est tout seul\"\n               }\n           ]\n       },\n       {\n           \"_id\": \"5c99dc8038ea0b001ee923e6\",\n           \"label\": \"Anglais\",\n           \"repartition\": []\n       }\n   ],\n   \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/groups/index.js",
    "groupTitle": "Groups",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/groups/new/"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/groups/:GroupId",
    "title": "Delete Repartition On ID",
    "name": "DeleteGroup",
    "group": "Groups",
    "description": "<p>Delete the Group, send a json to confirm the deletion</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"n\": 1,\n    \"ok\": 1,\n    \"deletedCount\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/groups/index.js",
    "groupTitle": "Groups",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/groups/:GroupId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/groups/",
    "title": "Returns all the groups created",
    "name": "GetAllGroups",
    "group": "Groups",
    "description": "<p>Returns a JSON containing all the existing Groups</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n{\n       \"_id\": \"5c99dc8038ea0b001ee923e5\",\n       \"groupName\": \"Alternants\",\n       \"seances\": [\n           {\n               \"repartition\": [\n                   {\n                       \"arrayStudentId\": [\n                           \"id1\",\n                           \"id2\"\n                       ],\n                       \"_id\": \"5c99dc8038ea0b001ee923ea\",\n                       \"groupName\": \"groupe N 1\"\n                   },\n                   {\n                       \"arrayStudentId\": [\n                           \"id3\",\n                           \"id4\",\n                           \"id5\"\n                       ],\n                       \"_id\": \"5c99dc8038ea0b001ee923e9\",\n                       \"groupName\": \"groupe N 2\"\n                   },\n                   {\n                       \"arrayStudentId\": [\n                           \"id6\"\n                       ],\n                       \"_id\": \"5c99dc8038ea0b001ee923e8\",\n                       \"groupName\": \"le mec qui est tout seul\"\n                   }\n               ],\n               \"_id\": \"5c99dc8038ea0b001ee923e7\",\n               \"label\": \"Analyse du Vecu\",\n               \"startingDate\": \"2019-03-10T08:30:00.000Z\",\n               \"finishingDate\": \"2019-03-10T11:30:00.000Z\"\n           },\n           {\n               \"repartition\": [],\n               \"_id\": \"5c99dc8038ea0b001ee923e6\",\n               \"label\": \"Anglais\"\n           }\n       ],\n       \"__v\": 0\n   },\n{\n       \"_id\": \"5c99e05838ea0b001ee923eb\",\n       \"groupName\": \"EBM\",\n       \"seances\": [\n           {\n               \"repartition\": [\n                   {\n                       \"arrayStudentId\": [\n                           \"id1\",\n                           \"id2\"\n                       ],\n                       \"_id\": \"5c99e05838ea0b001ee923ef\",\n                       \"groupName\": \"teamy\"\n                   },\n                   {\n                       \"arrayStudentId\": [\n                           \"id3\",\n                           \"id4\",\n                           \"id5\"\n                       ],\n                       \"_id\": \"5c99e05838ea0b001ee923ee\",\n                       \"groupName\": \"iRate\"\n                   },\n                   {\n                       \"arrayStudentId\": [\n                           \"id6\"\n                       ],\n                       \"_id\": \"5c99e05838ea0b001ee923ed\",\n                       \"groupName\": \"tenugui\"\n                   }\n               ],\n               \"_id\": \"5c99e05838ea0b001ee923ec\",\n               \"label\": \"Fil Rouge\",\n               \"startingDate\": \"2019-03-10T13:30:00.000Z\",\n               \"finishingDate\": \"2019-03-10T17:30:00.000Z\"\n           }\n       ],\n       \"__v\": 0\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/groups/index.js",
    "groupTitle": "Groups",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/groups/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/groups/:GroupId/seances/:SeanceId/repartition/ Returns all",
    "title": "the repartitions made in a seance",
    "name": "GetAllRepartitionsInSeance",
    "group": "Groups",
    "description": "<p>Returns an array of repartitions, empty array otherwise</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n{\n       \"arrayStudentId\": [\n           \"id1\",\n           \"id2\"\n       ],\n       \"_id\": \"5c99e05838ea0b001ee923ef\",\n       \"groupName\": \"teamy\"\n   },\n{\n       \"arrayStudentId\": [\n           \"id3\",\n           \"id4\",\n           \"id5\"\n       ],\n       \"_id\": \"5c99e05838ea0b001ee923ee\",\n       \"groupName\": \"iRate\"\n   },\n{\n       \"arrayStudentId\": [\n           \"id6\"\n       ],\n       \"_id\": \"5c99e05838ea0b001ee923ed\",\n       \"groupName\": \"tenugui\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/groups/index.js",
    "groupTitle": "Groups",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/groups/:GroupId/seances/:SeanceId/repartition/ Returns all"
      }
    ]
  },
  {
    "type": "get",
    "url": "/groups/:GroupId/seances/",
    "title": "Returns all the seances made in a group",
    "name": "GetAllSeancesInGroupById",
    "group": "Groups",
    "description": "<p>Returns an array of seances, empty array otherwise</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n{\n       \"repartition\": [\n           {\n               \"arrayStudentId\": [\n                   \"id1\",\n                   \"id2\"\n               ],\n               \"_id\": \"5c99e05838ea0b001ee923ef\",\n               \"groupName\": \"teamy\"\n           },\n           {\n               \"arrayStudentId\": [\n                   \"id3\",\n                   \"id4\",\n                   \"id5\"\n               ],\n               \"_id\": \"5c99e05838ea0b001ee923ee\",\n               \"groupName\": \"iRate\"\n           },\n           {\n               \"arrayStudentId\": [\n                   \"id6\"\n               ],\n               \"_id\": \"5c99e05838ea0b001ee923ed\",\n               \"groupName\": \"tenugui\"\n           }\n       ],\n       \"_id\": \"5c99e05838ea0b001ee923ec\",\n       \"label\": \"Fil Rouge\",\n       \"startingDate\": \"2019-03-10T13:30:00.000Z\",\n       \"finishingDate\": \"2019-03-10T17:30:00.000Z\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/groups/index.js",
    "groupTitle": "Groups",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/groups/:GroupId/seances/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/groups/:GroupId",
    "title": "Return the info of one goup by ID",
    "name": "GetOneGroupById",
    "group": "Groups",
    "description": "<p>Returns a JSON containing all the infos</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"_id\": \"5c99e05838ea0b001ee923eb\",\n   \"groupName\": \"EBM\",\n   \"seances\": [\n       {\n           \"repartition\": [\n               {\n                   \"arrayStudentId\": [\n                       \"id1\",\n                       \"id2\"\n                   ],\n                   \"_id\": \"5c99e05838ea0b001ee923ef\",\n                   \"groupName\": \"teamy\"\n               },\n               {\n                   \"arrayStudentId\": [\n                       \"id3\",\n                       \"id4\",\n                       \"id5\"\n                   ],\n                   \"_id\": \"5c99e05838ea0b001ee923ee\",\n                   \"groupName\": \"iRate\"\n               },\n               {\n                   \"arrayStudentId\": [\n                       \"id6\"\n                   ],\n                   \"_id\": \"5c99e05838ea0b001ee923ed\",\n                   \"groupName\": \"tenugui\"\n               }\n           ],\n           \"_id\": \"5c99e05838ea0b001ee923ec\",\n           \"label\": \"Fil Rouge\",\n           \"startingDate\": \"2019-03-10T13:30:00.000Z\",\n           \"finishingDate\": \"2019-03-10T17:30:00.000Z\"\n       }\n   ],\n   \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/groups/index.js",
    "groupTitle": "Groups",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/groups/:GroupId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/groups/GroupId/seances/:SeanceId/repartition/:RepartitionId Returns the info about",
    "title": "1 sub-group within a repartition",
    "name": "GetOneRepartitionInSeance",
    "group": "Groups",
    "description": "<p>Returns an object containing the info of the sub-group  by Id</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"arrayStudentId\": [\n       \"id1\",\n       \"id2\"\n   ],\n   \"_id\": \"5c99e05838ea0b001ee923ef\",\n   \"groupName\": \"teamy\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/groups/index.js",
    "groupTitle": "Groups",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/groups/GroupId/seances/:SeanceId/repartition/:RepartitionId Returns the info about"
      }
    ]
  },
  {
    "type": "get",
    "url": "/groups/:GroupId/seances/:SeanceId",
    "title": "Returns all the seances made in a groups",
    "name": "GetOneSeanceInGroupById",
    "group": "Groups",
    "description": "<p>Returns an object containing the info about a seance within a group</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"repartition\": [\n       {\n           \"arrayStudentId\": [\n               \"id1\",\n               \"id2\"\n           ],\n           \"_id\": \"5c99e05838ea0b001ee923ef\",\n           \"groupName\": \"teamy\"\n       },\n       {\n           \"arrayStudentId\": [\n               \"id3\",\n               \"id4\",\n               \"id5\"\n           ],\n           \"_id\": \"5c99e05838ea0b001ee923ee\",\n           \"groupName\": \"iRate\"\n       },\n       {\n           \"arrayStudentId\": [\n               \"id6\"\n           ],\n           \"_id\": \"5c99e05838ea0b001ee923ed\",\n           \"groupName\": \"tenugui\"\n       }\n   ],\n   \"_id\": \"5c99e05838ea0b001ee923ec\",\n   \"label\": \"Fil Rouge\",\n   \"startingDate\": \"2019-03-10T13:30:00.000Z\",\n   \"finishingDate\": \"2019-03-10T17:30:00.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/groups/index.js",
    "groupTitle": "Groups",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/groups/:GroupId/seances/:SeanceId"
      }
    ]
  },
  {
    "type": "put",
    "url": "groups/:GroupId",
    "title": "modifies a group",
    "name": "ModifyGroup",
    "group": "Groups",
    "description": "<p>Modifies the group, then returns the modified object. You just have to pass the fields to be modified.</p>",
    "parameter": {
      "examples": [
        {
          "title": "Request-example:",
          "content": "{\n  \"groupName\":\"EBM 2018-2019\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"_id\": \"5c99e05838ea0b001ee923eb\",\n   \"groupName\": \"EBM 2018-2019\",\n   \"seances\": [\n       {\n           \"repartition\": [\n               {\n                   \"arrayStudentId\": [\n                       \"id1\",\n                       \"id2\"\n                   ],\n                   \"_id\": \"5c99e05838ea0b001ee923ef\",\n                   \"groupName\": \"teamy\"\n               },\n               {\n                   \"arrayStudentId\": [\n                       \"id3\",\n                       \"id4\",\n                       \"id5\"\n                   ],\n                   \"_id\": \"5c99e05838ea0b001ee923ee\",\n                   \"groupName\": \"iRate\"\n               },\n               {\n                   \"arrayStudentId\": [\n                       \"id6\"\n                   ],\n                   \"_id\": \"5c99e05838ea0b001ee923ed\",\n                   \"groupName\": \"tenugui\"\n               }\n           ],\n           \"_id\": \"5c99e05838ea0b001ee923ec\",\n           \"label\": \"Fil Rouge\",\n           \"startingDate\": \"2019-03-10T13:30:00.000Z\",\n           \"finishingDate\": \"2019-03-10T17:30:00.000Z\"\n       }\n   ],\n   \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/groups/index.js",
    "groupTitle": "Groups",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/apigroups/:GroupId"
      }
    ]
  },
  {
    "type": "put",
    "url": "groups/:GroupId/seances/:SeanceId",
    "title": "modifies a group",
    "name": "ModifySeance",
    "group": "Groups",
    "description": "<p>Modifies the Seance, then returns the modified object. You just have to pass the fields to be modified. Does not return anything.</p>",
    "parameter": {
      "examples": [
        {
          "title": "Request-example:",
          "content": "{\n  \"groupName\":\"EBM 2018-2019\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/groups/index.js",
    "groupTitle": "Groups",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/apigroups/:GroupId/seances/:SeanceId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/prof-groups/new",
    "title": "Create new prof-groups entry",
    "name": "CreateNewProfGroup",
    "group": "ProfGroup",
    "description": "<p>Returns a JSON containing the created Prof-groups</p>",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"idProf\":\"5c7fbd47efcb020017b52dec\", # the user should exist and be a teacher for it to work\n \"idRepartition\":\"5c75051a292b402968fsdfg78\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n{\n       \"_id\": \"5c863ba15cb955001e71aff6\",\n       \"idProf\": \"5c7fbd47efcb020017b52dec\",\n       \"idRepartition\": \"5c75051a292b402968fsdfg78\",\n       \"__v\": 0\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/profGroup/index.js",
    "groupTitle": "ProfGroup",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/prof-groups/new"
      }
    ]
  },
  {
    "type": "get",
    "url": "/prof-groups/",
    "title": "Get all the prof and their groups",
    "name": "GetAllProfGroup",
    "group": "ProfGroup",
    "description": "<p>Returns a JSON containing all the existing Prof-groups</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n{\n      \"listGroup\": [],\n      \"_id\": \"5c7fbd5980a64f0017fb605b\",\n      \"name\": \"Dumortier\",\n      \"last_name\": \"Nans\",\n      \"isProf\": true,\n      \"__v\": 0\n  },\n{\n      \"listGroup\": [],\n      \"_id\": \"5c7fbf9c80a64f0017fb605c\",\n      \"name\": \"Chion\",\n      \"last_name\": \"Valentin\",\n      \"isProf\": false,\n      \"__v\": 0\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/profGroup/index.js",
    "groupTitle": "ProfGroup",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/prof-groups/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/prof-groups/:idProf",
    "title": "Get a prof info by ProfId -- NOT LINE ID",
    "name": "GetByProfId",
    "group": "ProfGroup",
    "description": "<p>Returns a JSON containing the Prof-groups entry</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n{\n       \"_id\": \"5c863ba15cb955001e71aff6\",\n       \"idProf\": \"5c7fbd47efcb020017b52dec\",\n       \"idRepartition\": \"5c75051a292b402968fsdfg78\",\n       \"__v\": 0\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/profGroup/index.js",
    "groupTitle": "ProfGroup",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/prof-groups/:idProf"
      }
    ]
  },
  {
    "type": "update",
    "url": "/:id",
    "title": "Modifies a a prof-group by its Line id",
    "name": "PutOnID",
    "group": "ProfGroup",
    "description": "<p>Returns a JSON containing the modified Prof-group entry</p>",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"idProf\": \"modified_info\",\n    \"idRepartition\": \"modified_info\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5c88b5489dfc2c001e69a6a3\",\n    \"idProf\": \"modified_info\",\n    \"idRepartition\": \"modified_info\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/profGroup/index.js",
    "groupTitle": "ProfGroup",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/:id"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/prof-groups/:idProf",
    "title": "delete a prof groups ids by its Line ID -- NOT PROF ID",
    "name": "deleteOnId",
    "group": "ProfGroup",
    "description": "<p>Returns a JSON containing the Prof-groups entry</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"_id\": \"5c863ba15cb955001e71aff6\",\n       \"idProf\": \"5c7fbd47efcb020017b52dec\",\n       \"idRepartition\": \"5c75051a292b402968fsdfg78\",\n       \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/profGroup/index.js",
    "groupTitle": "ProfGroup",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/prof-groups/:idProf"
      }
    ]
  },
  {
    "type": "post",
    "url": "/users/newUser",
    "title": "Create a new user",
    "name": "CreateUser",
    "group": "User",
    "description": "<p>Returns a JSON containing all the existing users who have &quot;isProf&quot;:true</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "user",
            "description": "<p>An object containing all the info on the new user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"Nans\",\n    \"last_name\": \"Dumortier\",\n    \"mailAddress\": \"notyoutbusiness@gmail.com\",\n    \"hashPassword\" : \"insertHashHere\",\n    \"salt\": \"saltHere\",\n    \"isProf\": false\n    # listgroup is not required\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"listGroup\": [],\n    \"_id\": \"5c90c6d4c6de40001f6a9c61\",\n    \"name\": \"Nans\",\n    \"last_name\": \"Dumortier\",\n    \"mailAddress\": \"notyoutbusiness@gmail.com\",\n    \"hashPassword\": \"insertHashHere\",\n    \"salt\": \"saltHere\",\n    \"isProf\": false,\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/user/index.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/users/newUser"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/users/:UserId",
    "title": "Delete a User",
    "name": "DeleteUser",
    "group": "User",
    "description": "<p>Return the JSON containing the confirmation of deletion</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"n\": 1,\n   \"ok\": 1,\n   \"deletedCount\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/user/index.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/users/:UserId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/students",
    "title": "Get all students",
    "name": "GetAllStudents",
    "group": "User",
    "description": "<p>Returns a JSON containing all the existing users who have &quot;isProf&quot;:false</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n{\n       \"listGroup\": [],\n       \"_id\": \"5c88dad2f3081b001e3f3934\",\n       \"name\": \"Malnoury\",\n       \"last_name\": \"Nathan\",\n       \"isProf\": false,\n       \"__v\": 0\n   },\n{\n       \"listGroup\": [],\n       \"_id\": \"5c90c6d4c6de40001f6a9c61\",\n       \"name\": \"Nans\",\n       \"last_name\": \"Dumortier\",\n       \"isProf\": false,\n       \"__v\": 0\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/user/index.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/users/students"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/teachers",
    "title": "Get all Teachers",
    "name": "GetAllTeachers",
    "group": "User",
    "description": "<p>Returns a JSON containing all the existing users who have &quot;isProf&quot;:true</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n{\n       \"listGroup\": [],\n       \"_id\": \"5c912488719b5c001e8d32f3\",\n       \"name\": \"Bourdeaud'Huy\",\n       \"last_name\": \"Thomas\",\n       \"isProf\": true,\n       \"__v\": 0\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/user/index.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/users/teachers"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/",
    "title": "Get all users",
    "name": "GetAllUsers",
    "group": "User",
    "description": "<p>Returns a JSON containing all the existing users, but no their credentials or mail address, for privacy purposes</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n{\n       \"listGroup\": [],\n       \"_id\": \"5c88dad2f3081b001e3f3934\",\n       \"name\": \"Malnoury\",\n       \"last_name\": \"Nathan\",\n       \"isProf\": false,\n       \"__v\": 0\n   },\n{\n       \"listGroup\": [],\n       \"_id\": \"5c90c6d4c6de40001f6a9c61\",\n       \"name\": \"Nans\",\n       \"last_name\": \"Dumortier\",\n       \"isProf\": false,\n       \"__v\": 0\n   },\n{\n       \"listGroup\": [],\n       \"_id\": \"5c912454719b5c001e8d32f2\",\n       \"name\": \"Bourdeaud'Huy\",\n       \"last_name\": \"Thomas\",\n       \"isProf\": false,\n       \"__v\": 0\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/user/index.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/users/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/:UserId",
    "title": "Get one user by its Id",
    "name": "GetUserById",
    "group": "User",
    "description": "<p>Returns a JSON containing the info of the user.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n{\n       \"listGroup\": [],\n       \"_id\": \"5c7fbd5980a64f0017fb605b\",\n       \"name\": \"Dumortier\",\n       \"last_name\": \"Nans\",\n       \"isProf\": true,\n       \"__v\": 0\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/user/index.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/users/:UserId"
      }
    ]
  },
  {
    "type": "put",
    "url": "/users/:UserId",
    "title": "Change a User",
    "name": "PutUser",
    "group": "User",
    "description": "<p>Return the JSON con{ &quot;name&quot;: &quot;Nans&quot;, &quot;last_name&quot;: &quot;Dumortier&quot;, &quot;mailAddress&quot;: &quot;notyoutbusiness@gmail.com&quot;, &quot;hashPassword&quot; : &quot;insertHashHere&quot;, &quot;salt&quot;: &quot;saltHere&quot;, &quot;isProf&quot;: false }taining the updated info of the user</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"listGroup\": [],\n    \"_id\": \"5c7fbd5980a64f0017fb605b\",\n    \"name\": \"Nans\",\n    \"last_name\": \"Dumortier\",\n    \"isProf\": false,\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/user/index.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/users/:UserId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/:UserId/isTeacher",
    "title": "Check if a user is a teacher by id",
    "name": "isProfById",
    "group": "User",
    "description": "<p>Returns a boolean</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "true",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/user/index.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/users/:UserId/isTeacher"
      }
    ]
  }
] });
