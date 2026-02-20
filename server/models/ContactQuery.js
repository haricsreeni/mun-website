const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const ContactQuery = sequelize.define(
    'ContactQuery',
    {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Email is required' },
                is: {
                    args: /^\S+@\S+\.\S+$/,
                    msg: 'Please enter a valid email',
                },
            },
        },
        query: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Query message is required' },
            },
        },
    },
    {
        tableName: 'contact_queries',
        timestamps: true,
        updatedAt: false,
    }
);

module.exports = ContactQuery;
