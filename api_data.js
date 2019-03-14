define({ "api": [
  {
    "type": "post",
    "url": "/prof-group/new",
    "title": "Create new prof-group entry",
    "name": "CreateNewProfGroup",
    "group": "ProfGroup",
    "description": "<p>Returns a JSON containing the created Prof-group</p>",
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
        "url": "http://localhost:4000/api/prof-group/new"
      }
    ]
  },
  {
    "type": "get",
    "url": "/prof-group/",
    "title": "Get all the prof and their groups",
    "name": "GetAllProfGroup",
    "group": "ProfGroup",
    "description": "<p>Returns a JSON containing all the existing Prof-group</p>",
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
        "url": "http://localhost:4000/api/prof-group/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/prof-group/:idProf",
    "title": "Get a prof info by ProfId -- NOT LINE ID",
    "name": "GetByProfId",
    "group": "ProfGroup",
    "description": "<p>Returns a JSON containing the Prof-group entry</p>",
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
        "url": "http://localhost:4000/api/prof-group/:idProf"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/prof-group/:idProf",
    "title": "delete a prof groups ids by its Line ID -- NOT PROF ID",
    "name": "deleteOnId",
    "group": "ProfGroup",
    "description": "<p>Returns a JSON containing the Prof-group entry</p>",
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
        "url": "http://localhost:4000/api/prof-group/:idProf"
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
          "content": " {\n \"name\": \"Bourdeaud'Hui\",\n \"last_name\" :\"Thomas\",\n \"isProf\": true\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"listGroup\": [],\n \"_id\": \"5c7fbfb980a64f0017fb605e\",\n \"name\": \"Bourdeaud'Hui\",\n \"last_name\": \"Thomas\",\n \"isProf\": true,\n \"__v\": 0\n}",
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
    "url": "/users/student",
    "title": "Get all students",
    "name": "GetAllStudents",
    "group": "User",
    "description": "<p>Returns a JSON containing all the existing users who have &quot;isProf&quot;:false</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n      \"listGroup\": [],\n      \"_id\": \"5c7fbf9c80a64f0017fb605c\",\n      \"name\": \"Chion\",\n      \"last_name\": \"Valentin\",\n      \"isProf\": false,\n      \"__v\": 0\n  },\n  {\n      \"listGroup\": [],\n      \"_id\": \"5c7fbfa780a64f0017fb605d\",\n      \"name\": \"Mottez\",\n      \"last_name\": \"Hugo\",\n      \"isProf\": false,\n      \"__v\": 0\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/user/index.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/users/student"
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
          "content": "[\n{\n      \"listGroup\": [],\n      \"_id\": \"5c7fbd5980a64f0017fb605b\",\n      \"name\": \"Dumortier\",\n      \"last_name\": \"Nans\",\n      \"isProf\": true,\n      \"__v\": 0\n  },\n{\n      \"listGroup\": [],\n      \"_id\": \"5c7fbfb980a64f0017fb605e\",\n      \"name\": \"Bourdeaud'Hui\",\n      \"last_name\": \"Thomas\",\n      \"isProf\": true,\n      \"__v\": 0\n  }\n]",
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
    "description": "<p>Returns a JSON containing all the existing users</p>",
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
    "description": "<p>Return the JSON containing the updated info of the user</p>",
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
    "url": "/users/isTeacher/:UserId",
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
        "url": "http://localhost:4000/api/users/isTeacher/:UserId"
      }
    ]
  }
] });
