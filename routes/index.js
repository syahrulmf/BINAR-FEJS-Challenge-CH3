var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard');
});

router.get('/list-car', function(req, res, next) {
  res.render('listCar');
});

router.get('/add-new-car', function(req, res, next) {
  res.render('newCar');
});

module.exports = router;
