const { Router } = require('express');

const router = new Router();
const controller = require('./profGroupController');

router.get('/', controller.getAll);

router.post('/new', controller.newProfGroup);

router.get('/:idProf', controller.getRepartition);

router.delete('/:id', controller.deleteOnLineId);

module.exports = router;
