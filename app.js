var express = require('express')
var path = require('path')

var app = express()

app.use(express.static('dist'))

app.get('/', function (req, res) {
  res.sendFile(path.resolve('dist', 'index.html'))
})

app.listen(process.env.PORT || 3000)
