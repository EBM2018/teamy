const { Router } = require('express');

const router = new Router();

// Require controller modules.
const userController = require('./userController');

// /BOOK ROUTES/ //

// GET catalog home page.
router.get('/', userController.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/list', userController.eleve_list);

router.get('/helloworld', (req, res) => res.send('Hello, World!'));
module.exports = router;
