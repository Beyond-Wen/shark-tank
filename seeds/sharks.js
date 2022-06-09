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
      name: 'Hammerhead Shark',
      habitat:
        'Widely distributed in tropical and temperate marine waters near the coasts and above the continental shelves.',
      behaviour:
        'They are aggressive hunters, feeding on smaller fish, octopuses, squid, and crustaceans. They do not actively seek out human prey, but are very defensive and will attack when provoked.',
      appearance:
        'They are gray-brown to olive-green on top with off-white undersides, and they have heavily serrated, triangular teeth. Their extra-tall, pointed dorsal fins are easily identifiable.',
      imageRef:
        'https://en.wikipedia.org/wiki/Hammerhead_shark#/media/File:Scalloped_Hammerhead_Shark_Sphyrna_Lewini_(226845659).jpeg',
    },
    {
      id: 2,
      name: 'Goblin Shark',
      habitat: 'sdfvds',
      behaviour: 'hfdlfadsjf',
      appearance: 'fadfsfsdf',
      imageRef:
        'https://cdn.britannica.com/70/227470-050-A20D1993/Goblin-shark-Mitsukurina-owstoni-Tokyo-Japan.jpg',
    },
    {
      id: 3,
      name: 'Great White Shark',
      habitat:
        'Great Whites are found in all cold temperate and tropical waters, from recent satellite tracking studies we now know that they migrate long distances, sometimes crossing entire ocean basins.',
      behaviour:
        'Great White Sharks engage in a number of behavioural and social activities, ranging from courtship to complex social behaviour. White sharks are generally very curious; they display intelligence and they even socialize if the situation demands it. They are ambush predators and therefore a hunting strategy such as breeching is an efficient technique used to ensure a kill. Seals are very agile and this ambush tactic is the most effective way to ensure a kill.',
      appearance:
        'White sharks are large bulky fishes with a body shaped like a blunt torpedo. They have a sharply pointed conical snout, large pectoral and dorsal fins, and a strong crescent-shaped tail. Only the belly of white sharks is whitish.',
      imageRef:
        'https://thumbs.dreamstime.com/b/great-white-shark-big-blue-67298087.jpg',
    },
    // {
    //   id: 4,
    //   name: 'tiger',
    //   facts_Id: 004,
    // },
    // {
    //   id: 5,
    //   name: 'leopard',
    //   facts_Id: 005,
    // },
    // {
    //   id: 6,
    //   name: 'angel',
    //   facts_Id: 006,
    // },
    // {
    //   id: 7,
    //   name: 'lemon',
    //   facts_Id: 007,
    // },
    // {
    //   id: 8,
    //   name: 'nurse',
    //   facts_Id: 008,
    // },
    // {
    //   id: 9,
    //   name: 'whiteTip',
    //   facts_Id: 009,
    // },
    // {
    //   id: 10,
    //   name: 'reef',
    //   facts_Id: 010,
    // },
    // {
    //   id: 11,
    //   name: 'bruce',
    //   facts_Id: 003,
    // },
    // {
    //   id: 12,
    //   name: 'reggae',
    //   facts_Id: 011,
    // },
    // {
    //   id: 13,
    //   name: 'don lino',
    //   facts_Id: 003,
    // },
    // {
    //   id: 14,
    //   name: 'baby shark',
    //   facts_Id: 012,
    // },
  ])
}
