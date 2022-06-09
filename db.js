const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getSharkInfo(sharkId, db = connection) {
  return db('sharks').select().where('id', sharkId).first()
}

module.exports = {
  getSharkInfo,
}
