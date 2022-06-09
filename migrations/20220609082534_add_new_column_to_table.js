/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.table('sharks', (table) => {
    table.text('behaviour')
    table.text('habitat')
    table.text('appearance')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.table('sharks', function (table) {
    table.dropColumn('behaviour')
    table.dropColumn('habitat')
    table.dropColumn('appearance')
  })
}
