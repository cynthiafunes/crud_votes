const Tema = require('./tema')
const Libro = require('./libro')

Tema.hasMany(Libro)
Libro.belongsTo(Tema)

module.exports = {
    Tema,
    Libro
}