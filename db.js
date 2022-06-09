const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {}

function getSpecificRecipe(id, db = connection) {
  return db('recipes')
    .join('ingredientrecipes', 'ingredientrecipes.recipe_id', 'recipes.id')
    .join('ingredients', 'ingredientrecipes.ingredient_id', 'ingredients.id')
    .select(
      'recipes.*',
      'ingredients.ingredient_name',
      'ingredientrecipes.measure',
      'ingredientrecipes.quantity'
    )
    .where('recipes.id', id)
}
