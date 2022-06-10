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
        'https://img.rezdy.com/PRODUCT_IMAGE/12835/Scalloped_hammerhead_Christopher_Dascher.jpg',
    },
    {
      id: 2,
      name: 'Goblin Shark',
      habitat:
        'The goblin shark is a fascinating species that lives in the open ocean from near the surface down to depths of at least 4265 feet (1300 m). Like many species with a deep-sea affinity, scientists believe goblin sharks only come near the surface at night and spend most of their lives in the dark.',
      behaviour: `Scientists don't know much about the behavior of these rarely seen animals. But they believe that goblin sharks are solitary, and are most active in the morning and evening. These animals are likely sluggish creatures, which can make it hard to chase food.`,
      appearance:
        'The Goblin Shark has a shovel-like snout, flabby body, and a tail with a weakly developed lower lobe. One of the distinctive features of the Goblin Shark is its protrusible mouth. The mouth can retract to a position under the eye, or extend forward under the snout.',
      imageRef:
        'https://i.natgeofe.com/k/ea4142c2-3b11-4cc0-99b9-bf3a37073ba1/goblin-shark-jaw.jpg',
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
        'https://th-thumbnailer.cdn-si-edu.com/JSCi8yHXWnaczxVFAYrDwuiPqLk=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/ae/98/ae980f74-fa29-4c42-9aff-eea13c2c1971/great_white_shark_south_africa.jpg',
    },
    {
      id: 4,
      name: 'Reggae Shark',
      habitat: `He lives off the coast of Jamaica`,
      behaviour: `Reggae Shark doesn't want to eat ya, he just wants your ganja.`,
      appearance: `He has dreadlocks under his Rastafarian hat.`,
      imageRef: `https://ih1.redbubble.net/image.192134480.2932/flat,750x,075,f-pad,750x1000,f8f8f8.u7.jpg`,
    },
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
    //   name: 'werewolf shark',
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
