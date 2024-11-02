const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('biblioteca_db', 'postgres', '', {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = sequelize