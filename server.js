const express = require('express')
const hbs = require('express-handlebars')
const server = express()

const userRoutes = require('./routes')
const path = require('path')
server.use(express.static('public'))

// Middleware
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.use(express.urlencoded({ extended: true }))

// Routes
server.use('/', userRoutes)

module.exports = server
