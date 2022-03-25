const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { layout: false, judul: 'BCR - Login' });
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard', { judul: 'BCR - Dashboard' });
});

router.get('/list-car', (req, res) => {
  res.render('listCar', { judul: 'BCR - List Car' });
});

router.get('/add-new-car', (req, res) => {
  res.render('newCar', { judul: 'BCR - Add New Car' });
});

module.exports = router;
