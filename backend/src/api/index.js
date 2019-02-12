const { Router } = require('express');

const router = new Router();

router.use('/eleves', require('./resources/eleves'));

module.exports = router;
