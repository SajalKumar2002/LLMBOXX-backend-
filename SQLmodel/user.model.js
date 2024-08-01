const { DataTypes } = require('sequelize');
const { sequelize } = require("../config/SQLconnection");

const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

User.sync({ alter: true })
    .catch(error => {
        console.error('Error syncing:', error.original);
    });

module.exports = User;