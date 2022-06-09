/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('sharks').del()
  await knex('sharks').insert([
    {
      id: 1,
      name: 'hammerhead',
      facts_Id: 001,
    },
    {
      id: 2,
      name: 'goblin',
      facts_Id: 002,
    },
    {
      id: 3,
      name: 'greatWhite',
      facts_Id: 003,
    },
    {
      id: 4,
      name: 'tiger',
      facts_Id: 004,
    },
    {
      id: 5,
      name: 'leopard',
      facts_Id: 005,
    },
    {
      id: 6,
      name: 'angel',
      facts_Id: 006,
    },
    {
      id: 7,
      name: 'lemon',
      facts_Id: 007,
    },
    {
      id: 8,
      name: 'nurse',
      facts_Id: 008,
    },
    {
      id: 9,
      name: 'whiteTip',
      facts_Id: 009,
    },
    {
      id: 10,
      name: 'reef',
      facts_Id: 010,
    },
    {
      id: 11,
      name: 'bruce',
      facts_Id: 003,
    },
    {
      id: 12,
      name: 'reggae',
      facts_Id: 011,
    },
    {
      id: 13,
      name: 'don lino',
      facts_Id: 003,
    },
    {
      id: 14,
      name: 'baby shark',
      facts_Id: 012,
    },
  ])
}
