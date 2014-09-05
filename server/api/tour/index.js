'use strict';

var express = require('express');
var controller = require('./tour.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.isAuthenticated(),controller.index);
router.get('/:id', controller.show);
router.post('/', auth.isAuthenticated(),controller.create);
// router.put('/:id', controller.update);
// router.patch('/:id', controller.update);
// router.delete('/:id', controller.destroy);

router.post('/:id/rating',auth.isAuthenticated(),controller.addReview);

module.exports = router;

