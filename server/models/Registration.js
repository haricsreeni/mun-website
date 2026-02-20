const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Registration = sequelize.define(
  'Registration',
  {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Full name is required' },
      },
    },
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
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Phone number is required' },
      },
    },
    institution: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Institution is required' },
      },
    },
    delegationType: {
      type: DataTypes.ENUM('individual', 'institution'),
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Delegation type is required' },
      },
    },
    committee: {
      type: DataTypes.ENUM('unsc', 'disec', 'unhrc', 'crisis'),
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Committee preference is required' },
      },
    },
    delegatesCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      validate: {
        min: { args: [2], msg: 'Delegates count must be at least 2' },
      },
    },
    experience: {
      type: DataTypes.ENUM('yes', 'no'),
      allowNull: true,
      defaultValue: null,
    },
    accommodation: {
      type: DataTypes.ENUM('yes', 'no'),
      allowNull: true,
      defaultValue: null,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: '',
    },
  },
  {
    tableName: 'registrations',
    timestamps: true,
    updatedAt: false,
  }
);

module.exports = Registration;
