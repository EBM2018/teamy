const { Router } = require('express');

const router = new Router();
const repartitionController = require('./repartitionController');

router.get('/', repartitionController.getAll);

router.post('/new', repartitionController.createNew);
