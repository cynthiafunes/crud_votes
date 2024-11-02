const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Tema = sequelize.define('tema', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    votos: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
})

module.exports = Tema