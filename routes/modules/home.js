const express = require('express')
const router = express.Router()
const URL = require('../../models/URL')
const shortURL = require('../../utils/shortURL')
// routes setting
router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const host = req.get('host')
  const originalURL = req.body.originalURL
  URL.findOne({ originalURL })
    .lean()
    .then(data =>
      data ? data : URL.create({ originalURL, shortURL: shortURL(5) })
    )
    .then(data =>
      res.render('index', { originalURL, shortURL: data.shortURL, host })
    )
    .catch(error => {
      console.log(error)
      res.render('error', { error: error.message })
    })
})

router.get('/:shortURL', (req, res) => {
  const host = req.get('host')
  const shortURL = req.params.shortURL
  const errorMsg = `${host}/${shortURL} is not exist`
  URL.findOne(req.params)
    .then(data =>
      data ? res.redirect(data.originalURL) : res.render('error', { errorMsg })
    )
    .catch(error => console.log(error))
})

module.exports = router