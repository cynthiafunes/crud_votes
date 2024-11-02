const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Libro = sequelize.define('libro', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    votos: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
})

module.exports = Libro