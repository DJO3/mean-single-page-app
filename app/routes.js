var express = require('express')
var router = express.Router()
var Nerd = require('./models/nerd')

router.get('/api/nerds', function (req, res, next) {
  Nerd.find(function (err, nerds) {
    if (err) {
      res.send(err)
    }
    res.json(nerds) // return all nerds in JSON format
  })
})

router.get('/', function (req, res, next) {
  res.sendfile('./public/views/index.html') // load our public/index.html file
})

module.exports = router
