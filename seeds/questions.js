/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('questions').del()
  await knex('questions').insert([
    { id: 1, question: 'What does it eat?', shark_id: 1, name: 'Rupert' },
    { id: 2, question: 'Is it dangerous?', shark_id: 1, name: 'Beyond' },
    { id: 3, question: 'How big is it?', shark_id: 2, name: 'Adam' },
    {
      id: 4,
      question: `How come I don't see them in aquariums?`,
      shark_id: 3,
      name: 'Ayoung',
    },
  ])
}
