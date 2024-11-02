const express = require('express')
const router = express.Router()
const { Libro } = require('../models')

router.get('/temas/:temaId/libros', async function(req, res) {
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
})

router.get('/temas/:temaId/libros/crear', function(req, res) {
    res.render('libros/crear', { temaId: req.params.temaId })
})

router.post('/temas/:temaId/libros', async function(req, res) {
    try {
        const libro = await Libro.create({
            ...req.body,
            temaId: req.params.temaId
        })
        res.redirect(`/temas/${req.params.temaId}/libros`)
    } catch (error) {
        res.status(500).send('Error al crear el libro')
    }
})

router.post('/libros/:id/votar', async function(req, res) {
    try {
        const libro = await Libro.findByPk(req.params.id)
        libro.votos = libro.votos + 1
        await libro.save()
        res.redirect(`/temas/${libro.temaId}/libros`)
    } catch (error) {
        res.status(500).send('Error al votar')
    }
})

module.exports = router