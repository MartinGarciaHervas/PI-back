const { Router } = require("express");

//Handlers
const getAllActivitiesHandler = require("../Handlers/getAllActivitiesHandler.js");
const getAllCountriesHandler = require("../Handlers/getAllCountriesHandler.js");
const deleteActivityHandler = require("../Handlers/deleteActivityHandler.js");
const postUserHandler = require("../Handlers/postUserHandler.js");
const loginHandler = require("../Handlers/login.js");
const recordHandler = require("../Handlers/postRecordHandler.js");
const getRecordHandler = require("../Handlers/getRecordHandler.js");
const deleteCountryFromActivityHandler = require("../Handlers/deleteCountryFromActivity.js");
const editActivityHandler = require("../Handlers/putActivityHandler.js");
const getCountryByIdHandler = require("../Handlers/getCountryByIdHandler.js");
const postActivityHandler = require("../Handlers/postActivityHandler.js");

//Router
const mainRouter = Router();

//Rutas

//Post
mainRouter.post('/user', postUserHandler)
mainRouter.post('/activities', postActivityHandler);
mainRouter.post('/record', recordHandler)

//Get
mainRouter.get('/countries', getAllCountriesHandler);
mainRouter.get('/countries/:idPais', getCountryByIdHandler);
mainRouter.get('/activities', getAllActivitiesHandler);
mainRouter.get('/user', loginHandler)
mainRouter.get('/record', getRecordHandler)

//Put
mainRouter.put('/activities', editActivityHandler)

//Delete
mainRouter.delete('/activities/:ids', deleteCountryFromActivityHandler)
mainRouter.delete('/activity/:idActivity', deleteActivityHandler)

module.exports = mainRouter;
