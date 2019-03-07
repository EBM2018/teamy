const { Router } = require('express');

const router = new Router();

// Require controller modules.
const userController = require('./userController');

router.get('/', userController.all);

/**
router.get('/students', userController.eleve);

/**
router.get('/teachers', userController.prof);

router.post('/newUser', userController.newUser);

router.get('/:UserId', userController.getUserById);

router.put('/:UserId', userController.editUserById);

router.delete('/:UserId', userController.deleteUserById);

/**
router.get('/isTeacher/:UserId', userController.checkIfProf);

module.exports = router;
