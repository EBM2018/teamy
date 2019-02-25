const { Router } = require('express');

const router = new Router();

// Require controller modules.
const userController = require('./userController');

router.get('/', userController.all);

router.get('/student', userController.eleve);

router.get('/professor', userController.prof);

router.post('/newUser', userController.newUser);

router.get('/:UserId', userController.getUserById);

router.put('/:UserId', userController.editUserById);

router.delete('/:UserId', userController.deleteUserById);
module.exports = router;
