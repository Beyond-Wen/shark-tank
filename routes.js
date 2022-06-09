const express = require('express')

const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('home') //this would be homepage
})

router.get('/sharks/:id', (req, res) => {
  const sharkId = req.params.id
  db.getSharkInfo(sharkId)
    .then((sharkData) => {
      console.log(sharkData)
      //the data that gets sent back from db.js once the function runs
      res.render('sharkPage', sharkData)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Server error')
    })
})

//specific shark page that links to an hbs template

//stretch
//answer question form

//add shark form

module.exports = router
