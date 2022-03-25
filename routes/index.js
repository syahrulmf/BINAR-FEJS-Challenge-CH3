var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {layout : false, title : 'BCR - Login'});
});

router.get('/dashboard', function(req, res) {
  res.render('dashboard', {title : 'BCR - Dashboard'});
});

router.get('/list-car', function(req, res) {
  res.render('listCar', {title : 'BCR - List Car'});
});

router.get('/add-new-car', function(req, res) {
  res.render('newCar', {title : 'BCR - Add New Car'});
});

module.exports = router;
