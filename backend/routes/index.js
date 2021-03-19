var express = require('express');
var router = express.Router();
let User = require('../controller/User')
let Music = require('../controller/Music')
let Movie = require('../controller/Movie')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', function(req, res, next) {
  User.find({}, (err, data) => {
    res.json({status: 0, message: '读取成功', data: data})
  })
});

router.get('/music', (req, res, next) => {
  Music.find({}, (err, data) => {
    res.json({status: 0, message: '读取成功', data: data})
  })
})

router.get('/movies', (req, res, next) => {
  Movie.find({}, (err, data) => {
    res.json({status: 0, message: '读取成功', data: data})
  })
})

module.exports = router;
