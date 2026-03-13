const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Registration = sequelize.define(
  'Registration',
  {
    /* ── Registration metadata ── */
    registrationType: {
      type: DataTypes.ENUM('individual', 'group'),
      allowNull: false,
      defaultValue: 'individual',
    },
    groupId: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },

    /* ── Personal information ── */
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: { msg: 'Name is required' } },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Email is required' },
        is: { args: /^\S+@\S+\.\S+$/, msg: 'Please enter a valid email' },
      },
    },
    classYear: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: { msg: 'Class/Year is required' } },
    },
    institution: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: { msg: 'Institution is required' } },
    },
    rollNumber: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Age is required' },
        min: { args: [15], msg: 'Age must be at least 15' },
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: { msg: 'Contact number is required' } },
    },

    /* ── MUN Experience ── */
    munExperience: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'N/A',
    },

    /* ── Committee preferences ── */
    committeePref1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: { msg: 'Committee preference 1 is required' } },
    },
    portfolioPref1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: { msg: 'Portfolio preference 1 is required' } },
    },
    committeePref2: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: { msg: 'Committee preference 2 is required' } },
    },
    portfolioPref2: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: { msg: 'Portfolio preference 2 is required' } },
    },

    /* ── Accommodation ── */
    accommodation: {
      type: DataTypes.ENUM('yes', 'no'),
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    tableName: 'registrations',
    timestamps: true,
    updatedAt: false,
  }
);

module.exports = Registration;
