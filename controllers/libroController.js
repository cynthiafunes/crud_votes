const { Libro } = require('../models')

const libroController = {
    mostrarLibros: async function(req, res) {
        try {
            const libros = await Libro.findAll({
                where: { temaId: req.params.temaId }
            })
            res.render('libros/lista', { 
                libros: libros,
                temaId: req.params.temaId 
            })
        } catch (error) {
            res.status(500).send('Error al cargar los libros')
        }
    },

    mostrarFormularioCrear: function(req, res) {
        res.render('libros/crear', { temaId: req.params.temaId })
    },

    crearLibro: async function(req, res) {
        try {
            const nuevoLibro = {
                titulo: req.body.titulo,
                autor: req.body.autor,
                votos: 0,
                temaId: req.params.temaId
            }
            await Libro.create(nuevoLibro)
            res.redirect(`/temas/${req.params.temaId}/libros`)
        } catch (error) {
            res.status(500).send('Error al crear el libro')
        }
    },

    votarLibro: async function(req, res) {
        try {
            const libro = await Libro.findByPk(req.params.id)
            if (!libro) {
                return res.status(404).send('Libro no encontrado')
            }
            libro.votos = libro.votos + 1
            await libro.save()
            res.redirect(`/temas/${libro.temaId}/libros`)
        } catch (error) {
            res.status(500).send('Error al votar por el libro')
        }
    }
}

module.exports = libroController