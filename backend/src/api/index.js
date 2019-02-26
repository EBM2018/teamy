const { Router } = require('express');

const router = new Router();

router.use('/user', require('./resources/user'));
router.use('/prof-group', require('./resources/profGroup'));

module.exports = router;
