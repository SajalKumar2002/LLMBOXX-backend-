const { DataTypes } = require('sequelize');
const { sequelize } = require("../config/SQLconnection");

const User = require('./user.model');

const Job = sequelize.define("Job", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
    },
    expected_time: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: () => new Date(Date.now() + 10 * 60 * 1000)
    },
    status: {
        type: DataTypes.TEXT,
        defaultValue: () => "waiting",
    },
    userid: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: "id"
        }
    }
}, {
    timestamps: true
});

Job.sync({ alter: true })
    .catch(error => {
        console.error('Error syncing:', error.original);
    });

module.exports = Job