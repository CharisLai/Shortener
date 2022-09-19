// require packages used in the project
const express = require('express')
const app = express()
const port = 2000

// require express-handlebars here
const exphbs = require('express-handlebars')

// setting template engin
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// routes setting
app.get('/', (req, res) => {
  res.send('This is my shortener built with Express')
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})