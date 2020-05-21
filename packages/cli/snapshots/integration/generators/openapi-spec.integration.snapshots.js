// IMPORTANT
// This snapshot file is auto-generated, but designed for humans.
// It should be checked into source control and tracked carefully.
// Re-generate by setting UPDATE_SNAPSHOTS=1 and running tests.
// Make sure to inspect the changes in the snapshots below.
// Do not ignore changes!

'use strict';

exports[`lb4 openapi-spec generates json spec to dist/openapi.json 1`] = `
{
  "openapi": "3.0.0",
  "info": {
    "title": "@loopback/example-todo",
    "version": "3.4.1",
    "description": "Tutorial example on how to build an application with LoopBack 4.",
    "contact": {
      "name": "IBM Corp."
    }
  },
  "paths": {
    "/todos/{id}": {
      "put": {
        "x-controller-name": "TodoController",
        "x-operation-name": "replaceTodo",
        "tags": [
          "TodoController"
        ],
        "responses": {
          "204": {
            "description": "Todo PUT success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Todo"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "TodoController.replaceTodo"
      },
      "patch": {
        "x-controller-name": "TodoController",
        "x-operation-name": "updateTodo",
        "tags": [
          "TodoController"
        ],
        "responses": {
          "204": {
            "description": "Todo PATCH success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TodoPartial"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "TodoController.updateTodo"
      },
      "get": {
        "x-controller-name": "TodoController",
        "x-operation-name": "findTodoById",
        "tags": [
          "TodoController"
        ],
        "responses": {
          "200": {
            "description": "Todo model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Todo"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "items",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "operationId": "TodoController.findTodoById"
      },
      "delete": {
        "x-controller-name": "TodoController",
        "x-operation-name": "deleteTodo",
        "tags": [
          "TodoController"
        ],
        "responses": {
          "204": {
            "description": "Todo DELETE success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "operationId": "TodoController.deleteTodo"
      }
    },
    "/todos": {
      "post": {
        "x-controller-name": "TodoController",
        "x-operation-name": "createTodo",
        "tags": [
          "TodoController"
        ],
        "responses": {
          "200": {
            "description": "Todo model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Todo"
                }
              }
            }
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewTodo"
              }
            }
          }
        },
        "operationId": "TodoController.createTodo"
      },
      "get": {
        "x-controller-name": "TodoController",
        "x-operation-name": "findTodos",
        "tags": [
          "TodoController"
        ],
        "responses": {
          "200": {
            "description": "Array of Todo model instances",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Todo"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Todo.Filter"
                }
              }
            }
          }
        ],
        "operationId": "TodoController.findTodos"
      }
    }
  },
  "servers": [
    {
      "url": "/"
    }
  ],
  "components": {
    "schemas": {
      "Todo": {
        "title": "Todo",
        "properties": {
          "id": {
            "type": "number"
          },
          "title": {
            "type": "string"
          },
          "desc": {
            "type": "string"
          },
          "isComplete": {
            "type": "boolean"
          },
          "remindAtAddress": {
            "type": "string"
          },
          "remindAtGeo": {
            "type": "string"
          },
          "tag": {}
        },
        "required": [
          "title"
        ],
        "additionalProperties": false
      },
      "NewTodo": {
        "title": "NewTodo",
        "description": "(tsType: Omit<Todo, 'id'>, schemaOptions: { title: 'NewTodo', exclude: [ 'id' ] })",
        "properties": {
          "title": {
            "type": "string"
          },
          "desc": {
            "type": "string"
          },
          "isComplete": {
            "type": "boolean"
          },
          "remindAtAddress": {
            "type": "string"
          },
          "remindAtGeo": {
            "type": "string"
          },
          "tag": {}
        },
        "required": [
          "title"
        ],
        "additionalProperties": false,
        "x-typescript-type": "Omit<Todo, 'id'>"
      },
      "TodoPartial": {
        "title": "TodoPartial",
        "description": "(tsType: Partial<Todo>, schemaOptions: { partial: true })",
        "properties": {
          "id": {
            "type": "number"
          },
          "title": {
            "type": "string"
          },
          "desc": {
            "type": "string"
          },
          "isComplete": {
            "type": "boolean"
          },
          "remindAtAddress": {
            "type": "string"
          },
          "remindAtGeo": {
            "type": "string"
          },
          "tag": {}
        },
        "additionalProperties": false,
        "x-typescript-type": "Partial<Todo>"
      },
      "Todo.Fields": {
        "title": "Todo.Fields",
        "type": "object",
        "properties": {
          "id": {
            "type": "boolean"
          },
          "title": {
            "type": "boolean"
          },
          "desc": {
            "type": "boolean"
          },
          "isComplete": {
            "type": "boolean"
          },
          "remindAtAddress": {
            "type": "boolean"
          },
          "remindAtGeo": {
            "type": "boolean"
          },
          "tag": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      },
      "Todo.Filter": {
        "type": "object",
        "title": "Todo.Filter",
        "properties": {
          "offset": {
            "type": "integer",
            "minimum": 0
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "example": 100
          },
          "skip": {
            "type": "integer",
            "minimum": 0
          },
          "order": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "where": {
            "title": "Todo.WhereFilter",
            "type": "object",
            "additionalProperties": true
          },
          "fields": {
            "$ref": "#/components/schemas/Todo.Fields"
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository#Filter<Todo>"
      }
    }
  }
}

`;


exports[`lb4 openapi-spec generates json spec with --out 1`] = `
{
  "openapi": "3.0.0",
  "info": {
    "title": "@loopback/example-todo",
    "version": "3.4.1",
    "description": "Tutorial example on how to build an application with LoopBack 4.",
    "contact": {
      "name": "IBM Corp."
    }
  },
  "paths": {
    "/todos/{id}": {
      "put": {
        "x-controller-name": "TodoController",
        "x-operation-name": "replaceTodo",
        "tags": [
          "TodoController"
        ],
        "responses": {
          "204": {
            "description": "Todo PUT success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Todo"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "TodoController.replaceTodo"
      },
      "patch": {
        "x-controller-name": "TodoController",
        "x-operation-name": "updateTodo",
        "tags": [
          "TodoController"
        ],
        "responses": {
          "204": {
            "description": "Todo PATCH success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TodoPartial"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "TodoController.updateTodo"
      },
      "get": {
        "x-controller-name": "TodoController",
        "x-operation-name": "findTodoById",
        "tags": [
          "TodoController"
        ],
        "responses": {
          "200": {
            "description": "Todo model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Todo"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "items",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "operationId": "TodoController.findTodoById"
      },
      "delete": {
        "x-controller-name": "TodoController",
        "x-operation-name": "deleteTodo",
        "tags": [
          "TodoController"
        ],
        "responses": {
          "204": {
            "description": "Todo DELETE success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "operationId": "TodoController.deleteTodo"
      }
    },
    "/todos": {
      "post": {
        "x-controller-name": "TodoController",
        "x-operation-name": "createTodo",
        "tags": [
          "TodoController"
        ],
        "responses": {
          "200": {
            "description": "Todo model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Todo"
                }
              }
            }
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewTodo"
              }
            }
          }
        },
        "operationId": "TodoController.createTodo"
      },
      "get": {
        "x-controller-name": "TodoController",
        "x-operation-name": "findTodos",
        "tags": [
          "TodoController"
        ],
        "responses": {
          "200": {
            "description": "Array of Todo model instances",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Todo"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Todo.Filter"
                }
              }
            }
          }
        ],
        "operationId": "TodoController.findTodos"
      }
    }
  },
  "servers": [
    {
      "url": "/"
    }
  ],
  "components": {
    "schemas": {
      "Todo": {
        "title": "Todo",
        "properties": {
          "id": {
            "type": "number"
          },
          "title": {
            "type": "string"
          },
          "desc": {
            "type": "string"
          },
          "isComplete": {
            "type": "boolean"
          },
          "remindAtAddress": {
            "type": "string"
          },
          "remindAtGeo": {
            "type": "string"
          },
          "tag": {}
        },
        "required": [
          "title"
        ],
        "additionalProperties": false
      },
      "NewTodo": {
        "title": "NewTodo",
        "description": "(tsType: Omit<Todo, 'id'>, schemaOptions: { title: 'NewTodo', exclude: [ 'id' ] })",
        "properties": {
          "title": {
            "type": "string"
          },
          "desc": {
            "type": "string"
          },
          "isComplete": {
            "type": "boolean"
          },
          "remindAtAddress": {
            "type": "string"
          },
          "remindAtGeo": {
            "type": "string"
          },
          "tag": {}
        },
        "required": [
          "title"
        ],
        "additionalProperties": false,
        "x-typescript-type": "Omit<Todo, 'id'>"
      },
      "TodoPartial": {
        "title": "TodoPartial",
        "description": "(tsType: Partial<Todo>, schemaOptions: { partial: true })",
        "properties": {
          "id": {
            "type": "number"
          },
          "title": {
            "type": "string"
          },
          "desc": {
            "type": "string"
          },
          "isComplete": {
            "type": "boolean"
          },
          "remindAtAddress": {
            "type": "string"
          },
          "remindAtGeo": {
            "type": "string"
          },
          "tag": {}
        },
        "additionalProperties": false,
        "x-typescript-type": "Partial<Todo>"
      },
      "Todo.Fields": {
        "title": "Todo.Fields",
        "type": "object",
        "properties": {
          "id": {
            "type": "boolean"
          },
          "title": {
            "type": "boolean"
          },
          "desc": {
            "type": "boolean"
          },
          "isComplete": {
            "type": "boolean"
          },
          "remindAtAddress": {
            "type": "boolean"
          },
          "remindAtGeo": {
            "type": "boolean"
          },
          "tag": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      },
      "Todo.Filter": {
        "type": "object",
        "title": "Todo.Filter",
        "properties": {
          "offset": {
            "type": "integer",
            "minimum": 0
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "example": 100
          },
          "skip": {
            "type": "integer",
            "minimum": 0
          },
          "order": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "where": {
            "title": "Todo.WhereFilter",
            "type": "object",
            "additionalProperties": true
          },
          "fields": {
            "$ref": "#/components/schemas/Todo.Fields"
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository#Filter<Todo>"
      }
    }
  }
}

`;


exports[`lb4 openapi-spec generates json spec with outFile prompt 1`] = `
{
  "openapi": "3.0.0",
  "info": {
    "title": "@loopback/example-todo",
    "version": "3.4.1",
    "description": "Tutorial example on how to build an application with LoopBack 4.",
    "contact": {
      "name": "IBM Corp."
    }
  },
  "paths": {
    "/todos/{id}": {
      "put": {
        "x-controller-name": "TodoController",
        "x-operation-name": "replaceTodo",
        "tags": [
          "TodoController"
        ],
        "responses": {
          "204": {
            "description": "Todo PUT success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Todo"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "TodoController.replaceTodo"
      },
      "patch": {
        "x-controller-name": "TodoController",
        "x-operation-name": "updateTodo",
        "tags": [
          "TodoController"
        ],
        "responses": {
          "204": {
            "description": "Todo PATCH success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TodoPartial"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "TodoController.updateTodo"
      },
      "get": {
        "x-controller-name": "TodoController",
        "x-operation-name": "findTodoById",
        "tags": [
          "TodoController"
        ],
        "responses": {
          "200": {
            "description": "Todo model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Todo"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "items",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "operationId": "TodoController.findTodoById"
      },
      "delete": {
        "x-controller-name": "TodoController",
        "x-operation-name": "deleteTodo",
        "tags": [
          "TodoController"
        ],
        "responses": {
          "204": {
            "description": "Todo DELETE success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "operationId": "TodoController.deleteTodo"
      }
    },
    "/todos": {
      "post": {
        "x-controller-name": "TodoController",
        "x-operation-name": "createTodo",
        "tags": [
          "TodoController"
        ],
        "responses": {
          "200": {
            "description": "Todo model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Todo"
                }
              }
            }
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewTodo"
              }
            }
          }
        },
        "operationId": "TodoController.createTodo"
      },
      "get": {
        "x-controller-name": "TodoController",
        "x-operation-name": "findTodos",
        "tags": [
          "TodoController"
        ],
        "responses": {
          "200": {
            "description": "Array of Todo model instances",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Todo"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Todo.Filter"
                }
              }
            }
          }
        ],
        "operationId": "TodoController.findTodos"
      }
    }
  },
  "servers": [
    {
      "url": "/"
    }
  ],
  "components": {
    "schemas": {
      "Todo": {
        "title": "Todo",
        "properties": {
          "id": {
            "type": "number"
          },
          "title": {
            "type": "string"
          },
          "desc": {
            "type": "string"
          },
          "isComplete": {
            "type": "boolean"
          },
          "remindAtAddress": {
            "type": "string"
          },
          "remindAtGeo": {
            "type": "string"
          },
          "tag": {}
        },
        "required": [
          "title"
        ],
        "additionalProperties": false
      },
      "NewTodo": {
        "title": "NewTodo",
        "description": "(tsType: Omit<Todo, 'id'>, schemaOptions: { title: 'NewTodo', exclude: [ 'id' ] })",
        "properties": {
          "title": {
            "type": "string"
          },
          "desc": {
            "type": "string"
          },
          "isComplete": {
            "type": "boolean"
          },
          "remindAtAddress": {
            "type": "string"
          },
          "remindAtGeo": {
            "type": "string"
          },
          "tag": {}
        },
        "required": [
          "title"
        ],
        "additionalProperties": false,
        "x-typescript-type": "Omit<Todo, 'id'>"
      },
      "TodoPartial": {
        "title": "TodoPartial",
        "description": "(tsType: Partial<Todo>, schemaOptions: { partial: true })",
        "properties": {
          "id": {
            "type": "number"
          },
          "title": {
            "type": "string"
          },
          "desc": {
            "type": "string"
          },
          "isComplete": {
            "type": "boolean"
          },
          "remindAtAddress": {
            "type": "string"
          },
          "remindAtGeo": {
            "type": "string"
          },
          "tag": {}
        },
        "additionalProperties": false,
        "x-typescript-type": "Partial<Todo>"
      },
      "Todo.Fields": {
        "title": "Todo.Fields",
        "type": "object",
        "properties": {
          "id": {
            "type": "boolean"
          },
          "title": {
            "type": "boolean"
          },
          "desc": {
            "type": "boolean"
          },
          "isComplete": {
            "type": "boolean"
          },
          "remindAtAddress": {
            "type": "boolean"
          },
          "remindAtGeo": {
            "type": "boolean"
          },
          "tag": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      },
      "Todo.Filter": {
        "type": "object",
        "title": "Todo.Filter",
        "properties": {
          "offset": {
            "type": "integer",
            "minimum": 0
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "example": 100
          },
          "skip": {
            "type": "integer",
            "minimum": 0
          },
          "order": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "where": {
            "title": "Todo.WhereFilter",
            "type": "object",
            "additionalProperties": true
          },
          "fields": {
            "$ref": "#/components/schemas/Todo.Fields"
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository#Filter<Todo>"
      }
    }
  }
}

`;


exports[`lb4 openapi-spec generates yaml spec with --out 1`] = `
openapi: 3.0.0
info:
  title: '@loopback/example-todo'
  version: 3.4.1
  description: Tutorial example on how to build an application with LoopBack 4.
  contact:
    name: IBM Corp.
paths:
  '/todos/{id}':
    put:
      x-controller-name: TodoController
      x-operation-name: replaceTodo
      tags:
        - TodoController
      responses:
        '204':
          description: Todo PUT success
      parameters:
        - name: id
          in: path
          schema:
            type: number
          required: true
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Todo'
        x-parameter-index: 1
      operationId: TodoController.replaceTodo
    patch:
      x-controller-name: TodoController
      x-operation-name: updateTodo
      tags:
        - TodoController
      responses:
        '204':
          description: Todo PATCH success
      parameters:
        - name: id
          in: path
          schema:
            type: number
          required: true
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/TodoPartial'
        x-parameter-index: 1
      operationId: TodoController.updateTodo
    get:
      x-controller-name: TodoController
      x-operation-name: findTodoById
      tags:
        - TodoController
      responses:
        '200':
          description: Todo model instance
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Todo'
      parameters:
        - name: id
          in: path
          schema:
            type: number
          required: true
        - name: items
          in: query
          schema:
            type: boolean
      operationId: TodoController.findTodoById
    delete:
      x-controller-name: TodoController
      x-operation-name: deleteTodo
      tags:
        - TodoController
      responses:
        '204':
          description: Todo DELETE success
      parameters:
        - name: id
          in: path
          schema:
            type: number
          required: true
      operationId: TodoController.deleteTodo
  /todos:
    post:
      x-controller-name: TodoController
      x-operation-name: createTodo
      tags:
        - TodoController
      responses:
        '200':
          description: Todo model instance
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Todo'
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/NewTodo'
      operationId: TodoController.createTodo
    get:
      x-controller-name: TodoController
      x-operation-name: findTodos
      tags:
        - TodoController
      responses:
        '200':
          description: Array of Todo model instances
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Todo'
      parameters:
        - name: filter
          in: query
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Todo.Filter'
      operationId: TodoController.findTodos
servers:
  - url: /
components:
  schemas:
    Todo:
      title: Todo
      properties:
        id:
          type: number
        title:
          type: string
        desc:
          type: string
        isComplete:
          type: boolean
        remindAtAddress:
          type: string
        remindAtGeo:
          type: string
        tag: {}
      required:
        - title
      additionalProperties: false
    NewTodo:
      title: NewTodo
      description: >-
        (tsType: Omit<Todo, 'id'>, schemaOptions: { title: 'NewTodo', exclude: [
        'id' ] })
      properties:
        title:
          type: string
        desc:
          type: string
        isComplete:
          type: boolean
        remindAtAddress:
          type: string
        remindAtGeo:
          type: string
        tag: {}
      required:
        - title
      additionalProperties: false
      x-typescript-type: 'Omit<Todo, ''id''>'
    TodoPartial:
      title: TodoPartial
      description: '(tsType: Partial<Todo>, schemaOptions: { partial: true })'
      properties:
        id:
          type: number
        title:
          type: string
        desc:
          type: string
        isComplete:
          type: boolean
        remindAtAddress:
          type: string
        remindAtGeo:
          type: string
        tag: {}
      additionalProperties: false
      x-typescript-type: Partial<Todo>
    Todo.Fields:
      title: Todo.Fields
      type: object
      properties:
        id:
          type: boolean
        title:
          type: boolean
        desc:
          type: boolean
        isComplete:
          type: boolean
        remindAtAddress:
          type: boolean
        remindAtGeo:
          type: boolean
        tag:
          type: boolean
      additionalProperties: false
    Todo.Filter:
      type: object
      title: Todo.Filter
      properties:
        offset:
          type: integer
          minimum: 0
        limit:
          type: integer
          minimum: 1
          example: 100
        skip:
          type: integer
          minimum: 0
        order:
          type: array
          items:
            type: string
        where:
          title: Todo.WhereFilter
          type: object
          additionalProperties: true
        fields:
          $ref: '#/components/schemas/Todo.Fields'
      additionalProperties: false
      x-typescript-type: '@loopback/repository#Filter<Todo>'

`;


exports[`lb4 openapi-spec generates yml spec with --out 1`] = `
openapi: 3.0.0
info:
  title: '@loopback/example-todo'
  version: 3.4.1
  description: Tutorial example on how to build an application with LoopBack 4.
  contact:
    name: IBM Corp.
paths:
  '/todos/{id}':
    put:
      x-controller-name: TodoController
      x-operation-name: replaceTodo
      tags:
        - TodoController
      responses:
        '204':
          description: Todo PUT success
      parameters:
        - name: id
          in: path
          schema:
            type: number
          required: true
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Todo'
        x-parameter-index: 1
      operationId: TodoController.replaceTodo
    patch:
      x-controller-name: TodoController
      x-operation-name: updateTodo
      tags:
        - TodoController
      responses:
        '204':
          description: Todo PATCH success
      parameters:
        - name: id
          in: path
          schema:
            type: number
          required: true
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/TodoPartial'
        x-parameter-index: 1
      operationId: TodoController.updateTodo
    get:
      x-controller-name: TodoController
      x-operation-name: findTodoById
      tags:
        - TodoController
      responses:
        '200':
          description: Todo model instance
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Todo'
      parameters:
        - name: id
          in: path
          schema:
            type: number
          required: true
        - name: items
          in: query
          schema:
            type: boolean
      operationId: TodoController.findTodoById
    delete:
      x-controller-name: TodoController
      x-operation-name: deleteTodo
      tags:
        - TodoController
      responses:
        '204':
          description: Todo DELETE success
      parameters:
        - name: id
          in: path
          schema:
            type: number
          required: true
      operationId: TodoController.deleteTodo
  /todos:
    post:
      x-controller-name: TodoController
      x-operation-name: createTodo
      tags:
        - TodoController
      responses:
        '200':
          description: Todo model instance
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Todo'
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/NewTodo'
      operationId: TodoController.createTodo
    get:
      x-controller-name: TodoController
      x-operation-name: findTodos
      tags:
        - TodoController
      responses:
        '200':
          description: Array of Todo model instances
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Todo'
      parameters:
        - name: filter
          in: query
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Todo.Filter'
      operationId: TodoController.findTodos
servers:
  - url: /
components:
  schemas:
    Todo:
      title: Todo
      properties:
        id:
          type: number
        title:
          type: string
        desc:
          type: string
        isComplete:
          type: boolean
        remindAtAddress:
          type: string
        remindAtGeo:
          type: string
        tag: {}
      required:
        - title
      additionalProperties: false
    NewTodo:
      title: NewTodo
      description: >-
        (tsType: Omit<Todo, 'id'>, schemaOptions: { title: 'NewTodo', exclude: [
        'id' ] })
      properties:
        title:
          type: string
        desc:
          type: string
        isComplete:
          type: boolean
        remindAtAddress:
          type: string
        remindAtGeo:
          type: string
        tag: {}
      required:
        - title
      additionalProperties: false
      x-typescript-type: 'Omit<Todo, ''id''>'
    TodoPartial:
      title: TodoPartial
      description: '(tsType: Partial<Todo>, schemaOptions: { partial: true })'
      properties:
        id:
          type: number
        title:
          type: string
        desc:
          type: string
        isComplete:
          type: boolean
        remindAtAddress:
          type: string
        remindAtGeo:
          type: string
        tag: {}
      additionalProperties: false
      x-typescript-type: Partial<Todo>
    Todo.Fields:
      title: Todo.Fields
      type: object
      properties:
        id:
          type: boolean
        title:
          type: boolean
        desc:
          type: boolean
        isComplete:
          type: boolean
        remindAtAddress:
          type: boolean
        remindAtGeo:
          type: boolean
        tag:
          type: boolean
      additionalProperties: false
    Todo.Filter:
      type: object
      title: Todo.Filter
      properties:
        offset:
          type: integer
          minimum: 0
        limit:
          type: integer
          minimum: 1
          example: 100
        skip:
          type: integer
          minimum: 0
        order:
          type: array
          items:
            type: string
        where:
          title: Todo.WhereFilter
          type: object
          additionalProperties: true
        fields:
          $ref: '#/components/schemas/Todo.Fields'
      additionalProperties: false
      x-typescript-type: '@loopback/repository#Filter<Todo>'

`;