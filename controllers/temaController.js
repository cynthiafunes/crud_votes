const { Tema } = require('../models')

const temaController = {
    mostrarTemas: async (req, res) => {
        try {
            const temas = await Tema.findAll({
                order: [['votos', 'DESC']]
            })
            res.render('temas/lista', { temas: temas })
        } catch (error) {
            res.status(500).send('Error al cargar los temas')
        }
    },

    mostrarFormularioCrear: (req, res) => {
        res.render('temas/crear')
    },

    crearTema: async (req, res) => {
        try {
            const nuevoTema = {
                nombre: req.body.nombre,
                votos: 0
            }
            await Tema.create(nuevoTema)
            res.redirect('/temas')
        } catch (error) {
            res.status(500).send('Error al crear el tema')
        }
    },

    votarTema: async (req, res) => {
        try {
            const tema = await Tema.findByPk(req.params.id)
            if (!tema) {
                return res.status(404).send('Tema no encontrado')
            }
            tema.votos = tema.votos + 1
            await tema.save()
            res.redirect('/temas')
        } catch (error) {
            res.status(500).send('Error al votar por el tema')
        }
    },

    mostrarFormularioEditar: async (req, res) => {
        try {
            const tema = await Tema.findByPk(req.params.id)
            res.render('temas/editar', { tema: tema })
        } catch (error) {
            res.status(500).send('Error al mostrar el formulario')
        }
    },

    actualizarTema: async (req, res) => {
        try {
            const tema = await Tema.findByPk(req.params.id)
            tema.nombre = req.body.nombre
            await tema.save()
            res.redirect('/temas')
        } catch (error) {
            res.status(500).send('Error al actualizar el tema')
        }
    },

    borrarTema: async (req, res) => {
        try {
            await Tema.destroy({
                where: { id: req.params.id }
            })
            res.redirect('/temas')
        } catch (error) {
            res.status(500).send('Error al borrar el tema')
        }
    }
}

module.exports = temaController