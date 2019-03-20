const { Router } = require('express');

const router = new Router();

router.use('/users', require('./resources/user'));
router.use('/prof-groups', require('./resources/profGroup'));
router.use('/groups', require('./resources/groups'));

module.exports = router;
