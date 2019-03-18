const { Router } = require('express');

const router = new Router();

router.use('/users', require('./resources/user'));
router.use('/prof-repartition', require('./resources/profGroup'));
router.use('/repartition', require('./resources/repartition'));

module.exports = router;
