define({ "api": [
  {
    "version": "0.2.0",
    "group": "User",
    "permission": [
      {
        "name": "auth"
      }
    ],
    "type": "post",
    "url": "getUsers",
    "title": "getUser(s)",
    "name": "getUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID if need getUser</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Search name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Search email</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{id: 1,name:'xxx',email:'xxx'}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "confirm",
            "description": "<p>confirm</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "tasksCount",
            "description": "<p>tasksCount</p>"
          },
          {
            "group": "Success 200",
            "type": "Datetime",
            "optional": false,
            "field": "lastLogin",
            "description": "<p>lastLogin format('d-m-Y H:m:s')</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "roles",
            "description": "<p>roles{id,name}</p>"
          },
          {
            "group": "Success 200",
            "type": "Datetime",
            "optional": false,
            "field": "created_at",
            "description": "<p>created_at format('d-m-Y H:m:s')</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "up_price",
            "description": "<p>price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>note</p>"
          }
        ]
      }
    },
    "filename": "/home/www/slovo.zz/app/Http/Controllers/Api/UserController.php",
    "groupTitle": "User"
  },
  {
    "version": "0.2.0",
    "group": "User",
    "permission": [
      {
        "name": "auth"
      }
    ],
    "type": "post",
    "url": "saveUser",
    "title": "saveUser",
    "name": "saveUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "Required",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "Required,Unique",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "up_price",
            "description": "<p>up_price</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>note</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "size": "Required",
            "optional": false,
            "field": "role",
            "description": "<p>role</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{name:'xxx',email:'xxx',up_price:1,note:'xxx',role:{1,2,3},password:'xxx'}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/www/slovo.zz/app/Http/Controllers/Api/UserController.php",
    "groupTitle": "User"
  }
] });
