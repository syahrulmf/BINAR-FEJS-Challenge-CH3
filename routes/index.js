const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { layout: false });
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

router.get('/list-car', (req, res) => {
  res.render('listCar');
});

router.get('/add-new-car', (req, res) => {
  res.render('newCar');
});

module.exports = router;
