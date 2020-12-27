const { Router } = require('express')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const history = require('connect-history-api-fallback')
const app = express()
const blink = require('./api/blink')
const staticFileMiddleware = express.static(path.join(__dirname + '../../frontend/dist'))

app.use(staticFileMiddleware)

app.use(cors())

// app.use(history({
//   disableDotRule: true,
//   verbose: true
// }))

app.use('/blink', blink)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.listen(3003, function () {
  console.log('App listening on port 3000!')
})