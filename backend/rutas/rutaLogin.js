const express = require('express');
const router = express.Router();
//importamos el archivo del controlador donde sucede la logica
const loginControlador = require('../controladores/conLogin');
//en el archivo anterior server.js, tomo /api/login... este archivo se queda con el resto de la url que es "2" 
//por ser el id de ejemplo de un usuario
//si ves, manda la solicitud ahora a loginControlador y usa la funcion verPerfil que esa dentro de ese archivo
router.get('/:id', loginControlador.verPerfil);


module.exports = router;