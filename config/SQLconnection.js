const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('LLMModel', 'sa', 'sajal123', {
    host: 'SAJAL\\SQLEXPRESS',
    dialect: 'mssql',
    logging: false,
    // port: 3306,
    dialectOptions: {
        options: {
            encrypt: true,
            trustServerCertificate: true,
        }
    }
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