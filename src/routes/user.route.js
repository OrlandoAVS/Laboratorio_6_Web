const { addUserController, showForm, showAllUsers } = require('../controllers/user.controller');
const router = require('express').Router();

router.get('/', showForm);
router.post('/home', addUserController);
// Nueva ruta para obtener todos los usuarios
router.get('/allUsers', showAllUsers);

module.exports = router;