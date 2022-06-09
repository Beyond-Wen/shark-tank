/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    { id: 1, question: 'What does it eat?', shark_id: 1 },
    { id: 2, question: 'Is it dangerous', shark_id: 1 },
    { id: 3, question: 'How big', shark_id: 2 },
    { id: 4, questions: 'where does it live?', shark_id: 3 },
    // { id: 5, questions: 'question5', shark_id: 2 },
    // { id: 6, questions: 'question6', shark_id: 6 },
    // { id: 7, questions: 'question7', shark_id: 7 },
    // { id: 8, questions: 'question8', shark_id: 8 },
    // { id: 9, questions: 'question9', shark_id: 9 },
    // { id: 10, questions: 'question10', shark_id: 10 },
    // { id: 11, questions: 'question11', shark_id: 11 },
    // { id: 12, questions: 'question12', shark_id: 12 },
    // { id: 13, questions: 'question13', shark_id: 13 },
    // { id: 14, questions: 'question14', shark_id: 14 },
    // { id: 15, questions: 'question15', shark_id: 2 },
  ])
}
