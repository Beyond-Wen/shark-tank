/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('facts').del()
  await knex('facts').insert([
    { id: 001, habitat: 'rowValue1', behaviour: '', physicalFeature: '' },
    { id: 002, habitat: 'rowValue1', behaviour: '', physicalFeature: '' },
    { id: 003, habitat: 'rowValue1', behaviour: '', physicalFeature: '' },
    { id: 004, habitat: 'rowValue1', behaviour: '', physicalFeature: '' },
    { id: 005, habitat: 'rowValue1', behaviour: '', physicalFeature: '' },
    { id: 006, habitat: 'rowValue1', behaviour: '', physicalFeature: '' },
    { id: 007, habitat: 'rowValue1', behaviour: '', physicalFeature: '' },
    { id: 008, habitat: 'rowValue1', behaviour: '', physicalFeature: '' },
    { id: 009, habitat: 'rowValue1', behaviour: '', physicalFeature: '' },
    { id: 010, habitat: 'rowValue1', behaviour: '', physicalFeature: '' },
    { id: 011, habitat: 'rowValue1', behaviour: '', physicalFeature: '' },
    { id: 012, habitat: 'rowValue1', behaviour: '', physicalFeature: '' },
  ])
}
