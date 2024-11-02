const { Tema } = require('../models')

const temaController = {
    mostrarTemas: async function(req, res) {
        try {
            const temas = await Tema.findAll()
            res.render('temas/lista', { temas: temas })
        } catch (error) {
            res.status(500).send('Error al mostrar los temas')
        }
    },

    mostrarFormularioCrear: function(req, res) {
        res.render('temas/crear')
    },

    crearTema: async function(req, res) {
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

    votarTema: async function(req, res) {
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
    }
}

module.exports = temaController