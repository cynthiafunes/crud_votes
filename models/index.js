const tema = require('./tema')
const libro = require('./libro')

tema.hasMany(libro)
libro.belongsTo(tema)

module.exports = {
    tema,
    libro
}