const csv = require('csvtojson');
const { sequelize } = require("../config/SQLconnection");
const { DataTypes } = require('sequelize');

const {
    nameExtractor,
    arrayDivider
} = require('../helpers/upload.helper')

const SqlConnector = async (req, res) => {
    try {
        const { serveraddress, port, username, password, database } = req.body;
        await sql.connect(
            `Server=${serveraddress},
            ${port};
            Database=${database};
            User Id=${username};
            Password=${password};
            Encrypt=true`
        )
        // const result = await sql.query`select * from mytable where id = ${value}`
        // console.dir(result)
    } catch (error) {
        console.log(error);
        res.send({ message: "Request failed" })
    }
}

// get link from s3
// download the file from link(csv)
// convert this csv file to sql DB
const CSVConvertor = async (req, res) => {
    try {
        const CSVFiles = req.files;
        var jsonData;
        var response = [];

        for (let index = 0; index < CSVFiles.length; index++) {
            const file = CSVFiles[index];
            jsonData = await csv().fromFile(file.path);
            const columns = {};

            const modelName = nameExtractor(file)

            Object.keys(jsonData[0]).forEach((key) => {
                columns[key] = {
                    type: DataTypes.STRING,
                    allowNull: true,
                };
            });

            const DynamicModel = sequelize.define(modelName, columns);

            DynamicModel.sync({ alter: true })
                .catch(error => {
                    console.error('Error syncing:', error.original);
                });

            await DynamicModel.bulkCreate(jsonData);
            response.push(
                {
                    name: modelName,
                    table: arrayDivider(jsonData, 5)
                }
            )
        }

        res.status(200).send(response);
    } catch (error) {
        console.error('Error processing file:', error);
        res.status(500).send('Error processing file');
    }
}

const connectDB = async (req, res) => {
    try {

        res.send("data")
    } catch (error) {
        console.log(error);
        res.send({ message: "Request failed" })
    }
}

module.exports = {
    SqlConnector,
    CSVConvertor,
    connectDB
}