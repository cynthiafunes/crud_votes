const express = require('express')
const router = express.Router()
const temaController = require('../controllers/temaController')

router.get('/temas', temaController.mostrarTemas)
router.get('/temas/crear', temaController.mostrarFormularioCrear)
router.post('/temas', temaController.crearTema)
router.post('/temas/:id/votar', temaController.votarTema)
router.get('/temas/:id/editar', temaController.mostrarFormularioEditar)
router.post('/temas/:id/editar', temaController.actualizarTema)
router.post('/temas/:id/borrar', temaController.borrarTema)

module.exports = router