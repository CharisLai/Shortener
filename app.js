// require packages used in the project
const express = require('express')
// require express-handlebars here
const exphbs = require('express-handlebars')
const routes = require('./routes')
const mongoose = require('mongoose')
const URL = require("./models/URL")
const shortURL = require('./utils/shortURL')
const app = express()
const port = 2000

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

// setting template engin
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }))

// setting routes
app.use(routes)

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
