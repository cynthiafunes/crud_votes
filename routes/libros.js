const express = require('express')
const router = express.Router()
const libroController = require('../controllers/libroController')

router.get('/temas/:temaId/libros', libroController.mostrarLibros)
router.get('/temas/:temaId/libros/crear', libroController.mostrarFormularioCrear)
router.post('/temas/:temaId/libros', libroController.crearLibro)
router.post('/libros/:id/votar', libroController.votarLibro)

module.exports = router