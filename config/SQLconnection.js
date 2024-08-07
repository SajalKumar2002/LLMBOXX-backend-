const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('llmmodel', 'root', '#Sajal123$', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    port: 3306,
});

const createConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = { sequelize, createConnection };