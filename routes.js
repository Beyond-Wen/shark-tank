const { queryAllByAltText } = require('@testing-library/dom')
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
      let singleShark = {}
      let questionArray = []

      for (let i = 0; i < sharkData.length; i++) {
        let questionObject = {}
        questionObject.questionAsker = sharkData[i].questionAsker
        questionObject.question = sharkData[i].question

        questionArray.push(questionObject)
      }
      singleShark = sharkData[0]
      singleShark.question = questionArray
      res.render('sharkPage', singleShark)
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
