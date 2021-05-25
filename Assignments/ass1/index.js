var express = require('express')
var morgan = require('morgan')

var hostname = 'localhost'
var port = 3000

var app = express()
app.use(morgan('dev'))

var dishRouter = require('./dishRouter')
app.use('/dish', dishRouter.router)

var promoRouter = require('./promoRouter')
app.use('/promotions', promoRouter.router)

var leaderRouter = require('./leaderRouter')
app.use('/leadership', leaderRouter.router)

app.listen(port, hostname, () => {
    console.log('Server is running')
})