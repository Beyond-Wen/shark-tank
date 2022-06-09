const express = require('express')

const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('home') //this would be homepage
})

//specific shark page that links to an hbs template

//stretch
//answer question form

//add shark form

module.exports = router
