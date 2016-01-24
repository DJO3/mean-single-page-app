/* modules */
var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')

/* config */
var db = require('./config/db')
var port = process.env.PORT || 8080

/* database */
mongoose.connect(db.url)

/* routes */
var routes = require('./app/routes.js')
var app = express()

/* POST retrieval */
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(bodyParser.urlencoded({ extended: true }))

app.use(methodOverride('X-HTTP-Method-Override'))
app.use(express.static(__dirname + '/public'))

app.use('/', routes)

/* app start */
app.listen(port)
console.log('Node started on port ' + port)
module.exports = app
