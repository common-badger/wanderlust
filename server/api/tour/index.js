'use strict';

var express = require('express');
var controller = require('./tour.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.create);
// router.get('/:city_name', controller.byCity);
router.get('/:id', controller.show);
// router.put('/:id', controller.update);
// router.patch('/:id', controller.update);
// router.delete('/:id', controller.destroy);

router.post('/:id/rating',controller.addReview);
module.exports = router;

