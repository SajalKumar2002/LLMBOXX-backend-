const { Router } = require("express");

const {
    SqlConnector,
    CSVConvertor,
    connectDB
} = require('../controllers/datasourse.controller')

const { upload } = require('../config/mutler')

const DataSourceRouter = Router();

DataSourceRouter.post("/sql", SqlConnector)
DataSourceRouter.post("/csv", upload.array('files', 5), CSVConvertor)
// DataSourceRouter.post("/csv", CSVConvertor)
DataSourceRouter.get("/", connectDB)

module.exports = DataSourceRouter;