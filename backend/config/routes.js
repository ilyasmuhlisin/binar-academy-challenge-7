const express = require("express");
const cors = require("cors");
const controllers = require("../app/controllers");
const carsController = require("../app/controllers/api/v1/carsController");
const apiRouter = express.Router();
apiRouter.use(cors());
apiRouter.use(express.json());


// Melakukan get Cars
apiRouter.get("/api/v1/cars/:date/:time/:passenger", carsController.list);


apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
