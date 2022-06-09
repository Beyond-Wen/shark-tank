const express = require('express')

const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = router
