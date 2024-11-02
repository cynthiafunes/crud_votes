const express = require('express')
const router = express.Router()
const { Tema, Libro } = require('../models')

router.get('/temas', async function(req, res) {
    try {
        const temas = await Tema.findAll()
        res.render('temas/lista', { temas: temas })
    } catch (error) {
        res.status(500).send('Error al cargar los temas')
    }
})

router.get('/temas/crear', function(req, res) {
    res.render('temas/crear')
})

router.post('/temas', async function(req, res) {
    try {
        await Tema.create(req.body)
        res.redirect('/temas')
    } catch (error) {
        res.status(500).send('Error al crear el tema')
    }
})

router.post('/temas/:id/votar', async function(req, res) {
    try {
        const tema = await Tema.findByPk(req.params.id)
        tema.votos = tema.votos + 1
        await tema.save()
        res.redirect('/temas')
    } catch (error) {
        res.status(500).send('Error al votar')
    }
})

module.exports = router