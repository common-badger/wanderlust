'use strict';

var express = require('express');
var controller = require('./tour.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/',controller.index);
router.get('/:id', controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.update);
router.delete('/:id', auth.isAuthenticated(),controller.destroy);

router.post('/:id/rating',auth.isAuthenticated(),controller.addReview);

module.exports = router;

