const express = require('express')
const router = express.Router()
const temaController = require('../controllers/temaController')

router.get('/temas', temaController.mostrarTemas)
router.get('/temas/crear', temaController.mostrarFormularioCrear)
router.post('/temas', temaController.crearTema)
router.post('/temas/:id/votar', temaController.votarTema)

module.exports = router