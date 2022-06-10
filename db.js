const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

//add a join to get the questions that are seeded in the questions table

function getSharkInfo(sharkId, db = connection) {
  return db('sharks')
    .join('questions', 'questions.shark_id', 'sharks.id')
    .where('sharks.id', sharkId)
    .select(
      'sharks.id as sharkNumber',
      'sharks.name as sharkName',
      'sharks.behaviour as behaviour',
      'sharks.habitat as habitat',
      'sharks.appearance as appearance',
      'sharks.imageRef as imageRef',
      'questions.name as questionAsker',
      'questions.question as question'
    )
    .first()
}

module.exports = {
  getSharkInfo,
}
