const { Router } = require('express');

const router = new Router();

// Require controller modules.
const userController = require('./userController');

router.get('/', userController.all);

router.get('/helloworld', (req, res) => res.send('Hello, World!'));

router.post('/newUser', userController.newUser);

router.get('/:UserId', userController.getUserById);
module.exports = router;
