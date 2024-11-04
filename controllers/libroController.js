const { Libro } = require('../models')

const libroController = {
    mostrarLibros: async (req, res) => {
        try {
            const libros = await Libro.findAll({
                where: { temaId: req.params.temaId },
                order: [['votos', 'DESC']]
            })
            res.render('libros/lista', { 
                libros: libros,
                temaId: req.params.temaId 
            })
        } catch (error) {
            res.status(500).send('Error al cargar los libros')
        }
    },

    mostrarFormularioCrear: (req, res) => {
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

    votarLibro: async (req, res) => {
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
    },

    mostrarFormularioEditar: async (req, res) => {
        try {
            const libro = await Libro.findByPk(req.params.id)
            res.render('libros/editar', { 
                libro: libro,
                temaId: libro.temaId 
            })
        } catch (error) {
            res.status(500).send('Error al mostrar el formulario')
        }
    },

    actualizarLibro: async (req, res) => {
        try {
            const libro = await Libro.findByPk(req.params.id)
            libro.titulo = req.body.titulo
            libro.autor = req.body.autor
            await libro.save()
            res.redirect(`/temas/${libro.temaId}/libros`)
        } catch (error) {
            res.status(500).send('Error al actualizar el libro')
        }
    },

    borrarLibro: async (req, res) => {
        try {
            const libro = await Libro.findByPk(req.params.id)
            const temaId = libro.temaId
            await libro.destroy()
            res.redirect(`/temas/${temaId}/libros`)
        } catch (error) {
            res.status(500).send('Error al borrar el libro')
        }
    }
}

module.exports = libroController