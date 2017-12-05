define({ "api": [
  {
    "version": "0.2.0",
    "group": "Access",
    "permission": [
      {
        "name": "auth,accessRoute:settings"
      }
    ],
    "type": "post",
    "url": "getTaskField",
    "title": "getTaskField",
    "name": "getTaskField",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "stage",
            "description": "<p>stage</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{stage: 1}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "array",
            "description": "<p>[[name:'xxx',lang: 'xxx',access: 1],[...]]</p>"
          }
        ]
      }
    },
    "filename": "/home/www/slovo.zz/app/Http/Controllers/Api/AccessController.php",
    "groupTitle": "Access"
  },
  {
    "version": "0.2.0",
    "group": "Access",
    "permission": [
      {
        "name": "auth,accessRoute:roles"
      }
    ],
    "type": "post",
    "url": "saveAccessMenu",
    "title": "saveAccessMenu",
    "name": "saveAccessMenu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "Required",
            "optional": false,
            "field": "menu",
            "description": "<p>menu ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "Required",
            "optional": false,
            "field": "role",
            "description": "<p>role</p>"
          },
          {
            "group": "Parameter",
            "type": "Mixed",
            "size": "Required",
            "optional": false,
            "field": "access",
            "description": "<p>access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{menu:1,role:2,access:3}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>trans('data.notifyOK')</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Array",
            "optional": false,
            "field": "errors",
            "description": "<p>errors{name:'error xxx',...}</p>"
          }
        ]
      }
    },
    "filename": "/home/www/slovo.zz/app/Http/Controllers/Api/AccessController.php",
    "groupTitle": "Access"
  },
  {
    "version": "0.2.0",
    "group": "Doc",
    "permission": [
      {
        "name": "auth,accessRoute:docs"
      }
    ],
    "type": "post",
    "url": "deleteDoc",
    "title": "deleteDoc(s)",
    "name": "deleteDoc",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "items",
            "description": "<p>items[1,2,3...] (ID's)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{items:{1,2,3}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>trans('data.notifyOK')</p>"
          }
        ]
      }
    },
    "filename": "/home/www/slovo.zz/app/Http/Controllers/Api/DocController.php",
    "groupTitle": "Doc"
  },
  {
    "version": "0.2.0",
    "group": "Doc",
    "permission": [
      {
        "name": "auth,accessRoute:docs"
      }
    ],
    "type": "post",
    "url": "getDocs",
    "title": "getDoc(s)",
    "name": "getDocs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID if need one</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Search name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{id: 1,name:'xxx'}",
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
            "field": "body",
            "description": "<p>body</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>user{id,name}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "roles",
            "description": "<p>roles</p>"
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
            "type": "Datetime",
            "optional": false,
            "field": "updated_at",
            "description": "<p>updated_at format('d-m-Y H:m:s')</p>"
          }
        ]
      }
    },
    "filename": "/home/www/slovo.zz/app/Http/Controllers/Api/DocController.php",
    "groupTitle": "Doc"
  },
  {
    "version": "0.2.0",
    "group": "Doc",
    "permission": [
      {
        "name": "auth,accessRoute:docs"
      }
    ],
    "type": "post",
    "url": "saveDoc",
    "title": "saveDoc",
    "name": "saveDoc",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          },
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
            "type": "Array",
            "size": "Required",
            "optional": false,
            "field": "roles",
            "description": "<p>roles[1,2,3..]</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "Required",
            "optional": false,
            "field": "user",
            "description": "<p>user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "Required",
            "optional": false,
            "field": "body",
            "description": "<p>body</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{id:2,name:'xxx',roles{1,2,4},body:'test'}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>trans('data.notifyOK')</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Array",
            "optional": false,
            "field": "errors",
            "description": "<p>errors{name:'error xxx',...}</p>"
          }
        ]
      }
    },
    "filename": "/home/www/slovo.zz/app/Http/Controllers/Api/DocController.php",
    "groupTitle": "Doc"
  },
  {
    "version": "0.2.0",
    "group": "Menu",
    "permission": [
      {
        "name": "auth"
      }
    ],
    "type": "post",
    "url": "getMenus",
    "title": "getMenus(s)",
    "name": "getMenus",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID if need one</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "role",
            "description": "<p>role</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{id: 1,role:'2}",
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
            "type": "Object",
            "optional": false,
            "field": "roles",
            "description": "<p>roles{access}</p>"
          }
        ]
      }
    },
    "filename": "/home/www/slovo.zz/app/Http/Controllers/Api/MenuController.php",
    "groupTitle": "Menu"
  },
  {
    "version": "0.2.0",
    "group": "Project",
    "permission": [
      {
        "name": "auth,accessRoute:projects"
      }
    ],
    "type": "post",
    "url": "deleteProject",
    "title": "deleteProject(s)",
    "name": "deleteProject",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "items",
            "description": "<p>items[1,2,3...] (ID's)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{items:{1,2,3}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>trans('data.notifyOK')</p>"
          }
        ]
      }
    },
    "filename": "/home/www/slovo.zz/app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "Project"
  },
  {
    "version": "0.2.0",
    "group": "Project",
    "permission": [
      {
        "name": "auth,accessRoute:projects"
      }
    ],
    "type": "post",
    "url": "getProjects",
    "title": "getProject(s)",
    "name": "getProjects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID if need one</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Search name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{id: 1,name:'xxx'}",
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
            "field": "site",
            "description": "<p>site</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>user{id,name}</p>"
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
            "type": "Datetime",
            "optional": false,
            "field": "updated_at",
            "description": "<p>updated_at format('d-m-Y H:m:s')</p>"
          }
        ]
      }
    },
    "filename": "/home/www/slovo.zz/app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "Project"
  },
  {
    "version": "0.2.0",
    "group": "Project",
    "permission": [
      {
        "name": "auth,accessRoute:projects"
      }
    ],
    "type": "post",
    "url": "saveProject",
    "title": "saveProject",
    "name": "saveProject",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          },
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
            "type": "Integer",
            "size": "Required,not Admin",
            "optional": false,
            "field": "user_id",
            "description": "<p>user_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{name:'xxx',user_id:2}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>trans('data.notifyOK')</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Array",
            "optional": false,
            "field": "errors",
            "description": "<p>errors{name:'error xxx',...}</p>"
          }
        ]
      }
    },
    "filename": "/home/www/slovo.zz/app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "Project"
  },
  {
    "version": "0.2.0",
    "group": "Role",
    "permission": [
      {
        "name": "auth,accessRoute:roles"
      }
    ],
    "type": "post",
    "url": "deleteRole",
    "title": "deleteRole(s)",
    "name": "deleteRole",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "items",
            "description": "<p>items[1,2,3...] (ID's)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{items:{1,2,3}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>trans('data.notifyOK')</p>"
          }
        ]
      }
    },
    "filename": "/home/www/slovo.zz/app/Http/Controllers/Api/RoleController.php",
    "groupTitle": "Role"
  },
  {
    "version": "0.2.0",
    "group": "Role",
    "permission": [
      {
        "name": "auth,accessRoute:roles"
      }
    ],
    "type": "post",
    "url": "getRoles",
    "title": "getRole(s)",
    "name": "getRoles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID if need one</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{id: 1}",
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
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>count</p>"
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
            "type": "Datetime",
            "optional": false,
            "field": "updated_at",
            "description": "<p>updated_at format('d-m-Y H:m:s')</p>"
          }
        ]
      }
    },
    "filename": "/home/www/slovo.zz/app/Http/Controllers/Api/RoleController.php",
    "groupTitle": "Role"
  },
  {
    "version": "0.2.0",
    "group": "Role",
    "permission": [
      {
        "name": "auth,accessRoute:roles"
      }
    ],
    "type": "post",
    "url": "saveRole",
    "title": "saveRole",
    "name": "saveRole",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "Required",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{name:'xxx'}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>trans('data.notifyOK')</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Array",
            "optional": false,
            "field": "errors",
            "description": "<p>errors{name:'error xxx',...}</p>"
          }
        ]
      }
    },
    "filename": "/home/www/slovo.zz/app/Http/Controllers/Api/RoleController.php",
    "groupTitle": "Role"
  },
  {
    "version": "0.2.0",
    "group": "Setting",
    "permission": [
      {
        "name": "auth,accessRoute:settings"
      }
    ],
    "type": "post",
    "url": "getGeneralSetting",
    "title": "getGeneralSetting",
    "name": "getGeneralSetting",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>[name:value,...]</p>"
          }
        ]
      }
    },
    "filename": "/home/www/slovo.zz/app/Http/Controllers/Api/SettingController.php",
    "groupTitle": "Setting"
  },
  {
    "version": "0.2.0",
    "group": "Setting",
    "permission": [
      {
        "name": "auth,accessRoute:settings"
      }
    ],
    "type": "post",
    "url": "saveGeneralSetting",
    "title": "saveGeneralSetting",
    "name": "saveGeneralSetting",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "generals",
            "description": "<p>[name:value]</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{generals {name:100,...}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>trans('data.notifyOK')</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Array",
            "optional": false,
            "field": "errors",
            "description": "<p>errors{name:'error xxx',...}</p>"
          }
        ]
      }
    },
    "filename": "/home/www/slovo.zz/app/Http/Controllers/Api/SettingController.php",
    "groupTitle": "Setting"
  },
  {
    "version": "0.2.0",
    "group": "Stage",
    "permission": [
      {
        "name": "auth,accessRoute:settings"
      }
    ],
    "type": "post",
    "url": "deleteStage",
    "title": "deleteStage(s)",
    "name": "deleteStage",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "items",
            "description": "<p>items[1,2,3...] (ID's)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{items:{1,2,3}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>trans('data.notifyOK')</p>"
          }
        ]
      }
    },
    "filename": "/home/www/slovo.zz/app/Http/Controllers/Api/StageController.php",
    "groupTitle": "Stage"
  },
  {
    "version": "0.2.0",
    "group": "Stage",
    "permission": [
      {
        "name": "auth,accessRoute:settings"
      }
    ],
    "type": "post",
    "url": "getStages",
    "title": "getStage(s)",
    "name": "getStages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID if need one</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{id: 1}",
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
            "type": "Integer",
            "optional": false,
            "field": "priority",
            "description": "<p>priority</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "price",
            "description": "<p>price</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "roles",
            "description": "<p>roles{access}</p>"
          }
        ]
      }
    },
    "filename": "/home/www/slovo.zz/app/Http/Controllers/Api/StageController.php",
    "groupTitle": "Stage"
  },
  {
    "version": "0.2.0",
    "group": "Stage",
    "permission": [
      {
        "name": "auth,accessRoute:settings"
      }
    ],
    "type": "post",
    "url": "saveStage",
    "title": "saveStage",
    "name": "saveStage",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          },
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
            "type": "Integer",
            "size": "Required,Unique,Integer,Min:0",
            "optional": false,
            "field": "priority",
            "description": "<p>priority</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "Integer,Min:0",
            "optional": false,
            "field": "price",
            "description": "<p>price</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{name:'xxx',priority:1,price:100}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>trans('data.notifyOK')</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Array",
            "optional": false,
            "field": "errors",
            "description": "<p>errors{name:'error xxx',...}</p>"
          }
        ]
      }
    },
    "filename": "/home/www/slovo.zz/app/Http/Controllers/Api/StageController.php",
    "groupTitle": "Stage"
  },
  {
    "version": "0.2.0",
    "group": "Subject",
    "permission": [
      {
        "name": "auth,accessRoute:subjects"
      }
    ],
    "type": "post",
    "url": "deleteSubject",
    "title": "deleteSubject(s)",
    "name": "deleteSubject",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "items",
            "description": "<p>items[1,2,3...] (ID's)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{items:{1,2,3}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>trans('data.notifyOK')</p>"
          }
        ]
      }
    },
    "filename": "/home/www/slovo.zz/app/Http/Controllers/Api/SubjectController.php",
    "groupTitle": "Subject"
  },
  {
    "version": "0.2.0",
    "group": "Subject",
    "permission": [
      {
        "name": "auth"
      }
    ],
    "type": "post",
    "url": "getSubjectList",
    "title": "getSubjectList",
    "name": "getSubjectList",
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
          }
        ]
      }
    },
    "filename": "/home/www/slovo.zz/app/Http/Controllers/Api/SubjectController.php",
    "groupTitle": "Subject"
  },
  {
    "version": "0.2.0",
    "group": "Subject",
    "permission": [
      {
        "name": "auth,accessRoute:subjects"
      }
    ],
    "type": "post",
    "url": "getSubjects",
    "title": "getSubject(s)",
    "name": "getSubjects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID if need one</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Search name</p>"
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
            "type": "Integer",
            "optional": false,
            "field": "price",
            "description": "<p>price</p>"
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
            "type": "Datetime",
            "optional": false,
            "field": "updated_at",
            "description": "<p>updated_at format('d-m-Y H:m:s')</p>"
          }
        ]
      }
    },
    "filename": "/home/www/slovo.zz/app/Http/Controllers/Api/SubjectController.php",
    "groupTitle": "Subject"
  },
  {
    "version": "0.2.0",
    "group": "Subject",
    "permission": [
      {
        "name": "auth,accessRoute:subjects"
      }
    ],
    "type": "post",
    "url": "saveSubject",
    "title": "saveSubject",
    "name": "saveSubject",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          },
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
            "size": "Required,Integer,Not_in:0,Min:0",
            "optional": false,
            "field": "price",
            "description": "<p>price</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{name:'xxx',price:100}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>trans('data.notifyOK')</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Array",
            "optional": false,
            "field": "errors",
            "description": "<p>errors{name:'error xxx',...}</p>"
          }
        ]
      }
    },
    "filename": "/home/www/slovo.zz/app/Http/Controllers/Api/SubjectController.php",
    "groupTitle": "Subject"
  },
  {
    "version": "0.2.0",
    "group": "User",
    "permission": [
      {
        "name": "auth,accessRoute"
      }
    ],
    "type": "post",
    "url": "approveUser",
    "title": "approveUser(s)",
    "name": "approveUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "items",
            "description": "<p>users's ID [1,2,3...]</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{items:{1,2,3}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>trans('data.notifyOK')</p>"
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
        "name": "auth,accessRoute"
      }
    ],
    "type": "post",
    "url": "deleteUser",
    "title": "deleteUser(s)",
    "name": "deleteUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "items",
            "description": "<p>items[1,2,3...] (ID's)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{items:{1,2,3}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>trans('data.notifyOK')</p>"
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
        "name": "auth,accessRoute:users"
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
            "description": "<p>ID if need one</p>"
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
    "url": "getUserList",
    "title": "getUserList",
    "name": "getUserList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "editor",
            "description": "<p>get all editors</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>get all authors</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{editor:'xxx',author:'xxx'}",
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
        "name": "auth,accessRoute"
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
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          },
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
            "description": "<p>role's ID [1,2,3..]</p>"
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
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>trans('data.notifyOK')</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Array",
            "optional": false,
            "field": "errors",
            "description": "<p>errors{name:'error xxx',...}</p>"
          }
        ]
      }
    },
    "filename": "/home/www/slovo.zz/app/Http/Controllers/Api/UserController.php",
    "groupTitle": "User"
  }
] });
