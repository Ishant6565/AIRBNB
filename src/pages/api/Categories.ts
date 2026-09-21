// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Categories } from '../../types/Categories.type'

export const categoriesData: Categories[] = [
    {
      'title': 'Islands',
      'image': 'https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg',
      'properties': [
        {
          'id': 1,
          'name': 'Stunning island by the sea with KALUA pool',
          'price': 11.748,
          'host': 'Juan',
          'rating': 4.8,
          latitude: 10.386164, 
          longitude: -75.555184,
          'localization': 'Province of Cartagena, Bolívar, Colombia',
          'description': 'Enjoy our exclusive private island located in the Rosario Islands. The place has a tropical style that matches the beautiful landscape, perfect for disconnecting from everyday life while surrounded by a sea of seven colors. The island has 4 bedrooms from which you can smell the sea, and a pool to enjoy the paradise while feeling the wind on your face... Enjoy our oasis.',
          images: [
            {
            url: 'https://a0.muscache.com/im/pictures/miso/Hosting-49227437/original/7cf358b9-e8c5-4067-9ac5-014784387e22.jpeg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/miso/Hosting-49227437/original/5b50ac57-8eca-4b8b-be51-43a7155ed37a.jpeg?im_w=720',
            },
        ]
        },
        {
          'id': 2,
          'name': 'NEW PRIVATE ISLAND',
          'price': 6.689,
          'host': 'Juan',
          'rating': 5.0,
          'localization': 'Province of Cartagena, Bolívar, Colombia',
          'description': 'Baru Island is a magical place in the Baru Islands, near Cartagena, ideal for disconnecting from the city. Its location is strategic because it is completely surrounded by the sea, making it a true island. The house is on 2 floors with 5 comfortable air-conditioned bedrooms and 4 bathrooms for guests, open living room, dining room, kitchen, deck areas for sunbathing or sunset, and green areas throughout the island. The price includes 3 staff members to serve guests.',
          latitude: 10.392451, 
          longitude: -75.571312,
          images: [
            {
            url: 'https://a0.muscache.com/im/pictures/4d128a6b-7b07-41fb-9637-8e0fe0157203.jpg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/3e3f797d-5e8e-4571-af57-0c1e6e752dde.jpg?im_w=1200',
            },
          ]
        },
        {
          'id': 4,
          'name': 'Beautiful private island with five spacious suites',
          'price': 34414,
          'host': 'Juan',
          'localization': 'Angra Dos Reis, Rio de Janeiro, Brazil',
          'description': 'Japan Island (IDJ) is a private and exclusive island located 7 km from the coast of Angra dos Reis, a municipality 168 km from Rio de Janeiro. Angra belongs to the Costa Verde region, surrounded by the Atlantic Forest with calm, crystal-clear sea. Japan Island is part of a prestigious network of customized projects built for the perfect escape. Every property is designed with the global traveler in mind, each with its own identity focused on art, design, adventure, and comfort. Guest access to IDJ is a residential and vacation property spanning 2,500 m² (6.1 acres), offering luxurious accommodation for up to 12 guests, a large common area, private beach, and crystal-clear water.',
          latitude: -22.954150,  
          longitude: -44.352170,
          images: [
            {
            url: 'https://a0.muscache.com/im/pictures/352f9642-7529-4709-8e42-56b53ba35c59.jpg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/e0ec1699-33ec-400a-9fb1-e67b5ba8a190.jpg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/7d665424-c41f-48d4-99da-0897ba3f38fe.jpg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/2062be7a-90f6-4b37-9a90-624e85ac6ddb.jpg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/6fd2f1d6-6ec3-4544-8f15-395268e5778d.jpg?im_w=1200',
            },
          ]
        },
        {
          'id': 5,
          'name': 'Araujo Island, house facing the sea',
          'price': 260,
          'host': 'Juan',
          'localization': 'Paraty, Rio de Janeiro, Brazil',
          'description': 'The house is located by the sea on Araujo Island in Paraty, RJ. It is 5 minutes from the mainland and 10 km from the historic center. It faces Praia Grande on the mainland, at km 561 on the Rio Santos Highway.',
          latitude: 9.342741,  
          longitude: -82.176036,
          images: [
            {
            url: 'https://a0.muscache.com/im/pictures/bf787e81-ceb5-410e-a8c1-417809b4d461.jpg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/b0c469d1-a5a9-4029-a4ac-50fde1c1ccb3.jpg?im_w=720',
            },
            
          ]
        },
        {
          'id': 6,
          'name': 'Beach cabin at Palmar Beach Lodge',
          'price': 656,
          'host': 'Juan',
          'rating': 4.75,
          'localization': 'Bastimentos Island, Bocas del Toro Province, Panama',
          'description': 'Fall asleep to the gentle sounds of the ocean in our beach cabins. Each unit is equipped with wooden floors, handcrafted furniture made from local wood, a queen-size bed, private bathroom, balcony, and ceiling fan. As our guest, you will have access to all the amenities of Palmar, including beach chairs, bar and restaurant, lounge, tourism desk, daily activities, yoga classes in our shala, and massages.',
          latitude: -23.154027,  
          longitude: -44.696853,
          images: [
            {
            url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47728550/original/05af7bb0-0bde-4c09-91c4-e4461b2acfcc.jpeg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47728550/original/27c81d32-5a1c-41a0-8409-7d1b95945b85.jpeg?im_w=720',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47728550/original/affe4fd0-43ed-4e71-8211-2f79eb16d54b.jpeg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47728550/original/2b37a1f1-25a0-4f88-b68a-aa9cf4c5a393.jpeg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47728550/original/61619702-e6ac-40a5-b921-aa550ce2304d.jpeg?im_w=720',
            },
          ]
        },
        {
          'id': 7,
          'name': 'Honeymoon cabin',
          'price': 1487,
          'host': 'Juan',
          'rating': 5,
          'localization': 'Bocas del Toro, Bocas del Toro Province, Panama',
          'description': 'Urraca is the only adults-only hotel on a private island in Bocas del Toro. Our self-sufficient mangrove island also hosts the Monkey Island Foundation. This 2-story cabin has 4 beds and accommodates up to 6 people; it includes a private deck, private bathroom with hot water, and a lounge area. Activities, excursions, and spa services are available. We offer a plant-based menu on request.',
          latitude: 9.163244,   
          longitude: -82.112648,
          images: [
            {
            url: 'https://a0.muscache.com/im/pictures/0e1e098c-1dcc-435c-99fc-288f6b06d7c8.jpg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/361453a4-4e76-47dc-8ff4-e5491269669b.jpg?im_w=720',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/bebcc46b-e86d-4f2e-add2-0733cf3954d3.jpg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/98eb02ed-aa09-4dce-9005-05deca91b89c.jpg?im_w=720',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/8cb76fb8-e04c-478f-a01a-a0968e49186d.jpg?im_w=1200',
            },
          ]
        },
        {
          'id': 8,
          'name': 'Pink Pearl Island Resort',
          'price': 2434,
          'host': 'Juan',
          'localization':'Pearl Cays, Nicaragua',
          'description': 'Pink Pearl Island is a private 2.5-acre Caribbean tropical island in the Caribbean of Nicaragua. It has turquoise-blue water, fine white sand, coconut trees, and is protected from rough seas by surrounding reefs and distant islands. Its immaculate reefs make it an ideal spot for snorkeling and diving. It is an eco-tourism retreat.',
          latitude: 9.163244,   
          longitude: -82.112648,
          images: [
            {
            url: 'https://a0.muscache.com/im/pictures/a6470903-fac7-47c5-b42d-31f16858b489.jpg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/5c60dc1d-ccf0-416d-96aa-cb9939bedb51.jpg?im_w=720',
            },
          ]
        },
        {
          'id': 9,
          'name': 'Pink Pearl Island Resort',
          'price': 2434,
          'host': 'Juan',
          'localization':'Pearl Cays, Nicaragua',
          'description': 'Pink Pearl Island is a private 2.5-acre Caribbean tropical island in the Caribbean of Nicaragua. It has turquoise-blue water, fine white sand, coconut trees, and is protected from rough seas by surrounding reefs and distant islands. Its immaculate reefs make it an ideal spot for snorkeling and diving. It is an eco-tourism retreat.',
          latitude: 9.163244,   
          longitude: -82.112648,
          images: [
            {
            url: 'https://a0.muscache.com/im/pictures/a6470903-fac7-47c5-b42d-31f16858b489.jpg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/5c60dc1d-ccf0-416d-96aa-cb9939bedb51.jpg?im_w=720',
            },
          ]
        },
      ]
    },
    {
      'title': 'Beach',
      'image': 'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg',
      'properties': [
        {
          'id': 10,
          'name': 'SALVADOR SEA-FRONT ROOM',
          'price': 50,
          'host': 'Juan',
          'rating': 5,
          latitude: -13.007651,  
          longitude: -38.508267,
          'localization': 'Salvador',
          'description': 'Great for students (preferably women), sea-facing, 50 meters to the beach, 200 meters to Barra Shopping, with plenty of shops, supermarkets, restaurants, snack bars, pharmacies, and several banks. There is a promenade by the beach for exercise and outdoor activities.',
          images: [
            {
            url: 'https://a0.muscache.com/im/pictures/777e0d41-ec20-4a74-b27b-799f84f01287.jpg?im_w=720',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/c374e070-f1d2-4c14-a577-fb90db171b85.jpg?im_w=1200',
            },
        ]
        },
        {
          'id': 11,
          'name': 'Cozy apartment right by Barra Lighthouse beach',
          'price': 150,
          'host': 'Juan',
          latitude: -13.011228,   
          longitude: -38.504481,
          'localization': 'Salvador',
          'description': 'New apartment, 1 bedroom, 1 bathroom, kitchen, laundry, furnished, FAROL DA BARRA.',
          images: [
            {
              url: 'https://a0.muscache.com/im/pictures/252bdc02-f750-480b-b7ca-9f9f19f2a75a.jpg?im_w=720',
            },
            {
              url: 'https://a0.muscache.com/im/pictures/1105553/e3eb4763_original.jpg?im_w=1200',
            },
        ]
        },
      ]
    },
    {
      'title': 'Amazing Pools',
      'image': 'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg',
      'properties': [
        {
          'id': 12,
          'name': 'SALVADOR SEA-FRONT ROOM',
          'price': 810,
          'host': 'Juan',
          'rating': 4.68,
          latitude: -24.017955, 
          longitude: -46.277245,  
          'localization': 'Guarujá',
          'description': 'Beautiful penthouse with 220 square meters, located two blocks from the beach, in excellent condition, with a large outdoor area with a pool, barbecue, garden, and gourmet space. Fully equipped and perfect for spending great moments with friends and family. Pay attention to the municipality rules on access to the city, especially during the COVID-19 pandemic. In this regard, follow the prevention guidance provided by local and international medical entities for your safety.',
          images: [
            {
            url: 'https://a0.muscache.com/im/pictures/8690b59a-a221-4bf0-b0d2-8dcc7e3dbb7e.jpg?im_w=1200',
            },
            {
            url: 'https://a0.muscache.com/im/pictures/4182e9c3-9318-402f-8535-e79c68b3708a.jpg?im_w=720',
            },
        ]
        },
      ]
    },
    {
      'title': 'Wow!',
      'image': 'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg',
      'properties': [
        {
          'id': 13,
          'name': 'Cliff House',
          'price': 2755,
          'host': 'Juan',
          'localization': 'Spain',
          'description': 'This 2-story property consists of a living room, a fully equipped kitchen with dishwasher, 3 bedrooms, and 3 bathrooms (1 with bathtub, the other 2 with shower). It can therefore accommodate 6 people. Additional amenities include Wi-Fi, air conditioning throughout the house, a washing machine, a dryer, and satellite TV. A baby crib and high chair are available upon request. Bedroom 1 has 1 queen-size bed. Bedroom 2 has 1 double bed. Bedroom 3 has 2 single beds. The highlight of this accommodation is its private outdoor area with a pool (which can be heated for €5 per night), garden, open terrace, barbecue, and outdoor shower. Share a delicious meal on your terrace while enjoying the fantastic view of the sea and nearby mountains.',
          images: [
            {
              url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=1200',
            },
            {
              url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/dd489167-14b9-464e-a291-e8390519b1dc.jpeg?im_w=720',
            },
        ]
        },
      ]
    },
    {
      'title': 'National Parks',
      'image': 'https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg',
      'properties': [
        {
          'id': 14,
          'name': 'Boa Esperanca Stellan',
          'price': 710,
          'host': 'Juan',
          'localization': 'Paraty',
          'description': 'A calm, peaceful countryside house with three bedrooms, a fully equipped kitchen, a spacious living room, and a huge terrace with magnificent views. There is also a beautiful pool with equally stunning views, shared with the neighboring house. This tasteful home is located 7 km from the city of Paraty.',
          images: [
            {
              url: 'https://a0.muscache.com/im/pictures/0112a195-6694-4182-92b5-c8d2879a0e30.jpg?im_w=720',
            },
            {
              url: 'https://a0.muscache.com/im/pictures/5f0a5949-6b03-4f81-a22b-a33c0e3be11b.jpg?im_w=720',
            },
            {
              url: 'https://a0.muscache.com/im/pictures/2e5b29d1-53c4-4a67-aa37-b17710271300.jpg?im_w=720',
            },
        ]
        },
        {
          'id': 15,
          'name': 'Design House in the tropical forest with private waterfall',
          'price': 1003,
          'host': 'Juan',
          'localization': 'paraty',
          'description': 'A unique design house inspired by Ashaninka tribal architecture, nestled in the tropical forest with a private waterfall 300 meters from your door. All the water for the house comes from a natural spring in this home fully integrated with nature. Easy access by car or bus in 20 minutes to the center of Paraty. The house sits on private property of a long-time friend sharing more than 200,000 square meters with only 5 other homes, with total safety and privacy.',
          images: [
            {
              url: 'https://a0.muscache.com/im/pictures/miso/Hosting-22319550/original/e08d07a2-4eaa-4930-9c22-132072aee408.jpeg?im_w=1200',
            },
        ]
        },
      ]
    },
    {
      'title': 'Micro Houses',
      'image': 'https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg',
      properties: [
        {
          'id': 16,
          'name': 'The Cocoon: twin cabin with hydro spa facing the waterfall',
          'price': 1003,
          'host': 'Juan',
          'localization': 'São Paulo',
          'description': 'Twin cabin with A Flecha at Cambuim Cabanas, a paradisiacal retreat in the mountains of Serra Catarinense with exclusive waterfalls, making the place excellent to visit even in summer.',
          images: [
            {
              url: 'https://a0.muscache.com/im/pictures/40588b31-71f1-4b0f-a755-ea3005d246c3.jpg?im_w=1200',
            },
          ]
        }
      ]
    },
    {
      'title': 'Distinctive Design',
      'image': 'https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg',
      properties: [
        {
          'id': 17,
          'name': 'Contemporary and sustainable in the heart of nature',
          'price': 717,
          'host': 'Juan',
          'localization': 'Rio de janeiro',
          'description': 'A unique opportunity to live in this house and enjoy a restful stay surrounded by nature with the best access to the beaches and the center of Ubatuba. Located in the Ressaca condominium with 24-hour security. Fiber-optic Wi-Fi internet.',
          images: [
            {
              url: 'https://a0.muscache.com/im/pictures/612c91c5-106c-42c3-907e-c6d9675d88c5.jpg?im_w=720',
            },
          ]
        }
      ]
    },
    {
      'title': 'Arctic',
      'image': 'https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg',
      properties: [
        {
          'id': 18,
          'name': 'The Arctic Hideaway, the Njalla, the tower house.',
          'price': 1059,
          'host': 'Juan',
          'localization': 'Norway',
          'description': 'Our tower, the Njalla, is an emblematic playful version of a Sami food and storage house. Our column is steel and sized for winds up to 100 m/s. Winds we have never had here. The Njalla is offered only occasionally as a sleeping capsule. We want most of the year to be a shared reading house, but sometimes you need to sleep there.',
          images: [
            {
              url: 'https://a0.muscache.com/im/pictures/6e98e30a-cc26-4110-a06f-072e7663f07d.jpg?im_w=1200',
            },
          ]
        }
      ]
    },
    {
      'title': 'Triangular Houses',
      'image': 'https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg',
      properties: [
        {
          'id': 19,
          'name': 'Dawn Mountain',
          'price': 650,
          'host': 'Juan',
          'localization': 'Santa Catarina',
          'description': 'Our chalet has 48 square meters, well thought out and distributed between a complete kitchen, a TV room, a spacious bathroom, and a mezzanine with a hot tub for couples, with a 1.38x1.98 double bed. The mountain view from our inn is incredible and deserves praise. It is one of the best among the inns. We also arrange hot air balloon rides, hikes, horseback riding, quad biking, and more.',
          images: [
            {
              url: 'https://a0.muscache.com/im/pictures/5558d351-5cfa-4869-bffa-44905a72f0fd.jpg?im_w=1200',
            },
          ]
        }
      ]
    },
    {
      'title': 'Treehouses',
      'image': 'https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg',
      properties: [
        {
          'id': 20,
          'name': 'Forest Walk',
          'price': 759,
          'host': 'Juan',
          'localization': 'Belo Horizonte',
          'description': 'NATURAVE is a unique stay experience at the top of the trees. A single cabin where, in the comfort of your room, you can enjoy birds singing, watch monkey families pass by the mountain right in front of you, or simply enjoy a cup of coffee surrounded by the peace of Monteverde.',
          images: [
            {
              url: 'https://a0.muscache.com/im/pictures/379f84f9-d418-41ad-b1b3-e1f9d007124d.jpg?im_w=1200',
            },
            {
              url: 'https://a0.muscache.com/im/pictures/miso/Hosting-53292029/original/b7fae438-a4e5-4c8e-9bf5-c26c7610f25d.jpeg?im_w=1200',
            },
            {
              url: 'https://a0.muscache.com/im/pictures/miso/Hosting-53292029/original/6e8ba355-a167-4662-98b8-3eb543c841f5.jpeg?im_w=720',
            },
          ]
        }
      ]
    },
    {
      'title': 'Tropical',
      'image': 'https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg',
      properties: [
        {
          'id': 21,
          'name': 'Atelier House',
          'price': 8129,
          'host': 'Juan',
          'localization': 'Barbados',
          'description': 'Caribbean sunshine streams in floor-to-ceiling windows to light up this modern take on a beach house in Carlton Ridge. The infinity pool seems to spill into a stand of mahogany trees leading down to the sea, and a wraparound terrace has spots for lounging, sitting, and dining. A double-height great room overlooks gardens with lilies and palms native to Barbados. It’s minutes to west coast beaches.',
          images: [
            {
              url: 'https://a0.muscache.com/im/pictures/monet/Luxury-54345978/original/81e4484e-7ec5-4499-8f13-bc26432c3bd1?im_w=720',
            },
            {
              url: 'https://a0.muscache.com/im/pictures/monet/Luxury-54345978/original/688af106-8470-4a35-b219-4218e11bf9d0?im_w=720',
            },
          ]
        }
      ]
    },
    {
      'title': 'Famous Cities',
      'image': 'https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg',
      properties: [
        {
          'id': 22,
          'name': 'Penthouse with the best view of Paris',
          'price': 1992,
          'host': 'Juan',
          'localization': 'Paris',
          'description': 'No one in front of your extraordinary terrace, but a unique view of all of Paris from your loft, open to the sky, with the Eiffel Tower 100 m away.',
          images: [
            {
              url: 'https://a0.muscache.com/im/pictures/12015095/160e3020_original.jpg?im_w=1200',
            },
            {
              url: 'https://a0.muscache.com/im/pictures/6883400f-609c-4a5c-b6fd-b70d30a2a1fe.jpg?im_w=720',
            },
            {
              url: 'https://a0.muscache.com/im/pictures/12015176/7d6e605e_original.jpg?im_w=1200',
            },
          ]
        }
      ]
    },
    {
      'title': 'Castles',
      'image': 'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg',
      properties: [
        {
          'id': 23,
          'name': 'Brand New apartment near the beach',
          'price': 332,
          'host': 'Juan',
          'localization': 'Spain',
          'description': 'Excellent apartment, completely renovated and new, in a very quiet residence near the sea, shops, train station, and airport. Just a short distance from everything you need.',
          images: [
            {
              url: 'https://a0.muscache.com/im/pictures/2b73c82c-871a-4eb7-bfcf-0138a50822f6.jpg?im_w=1200',
            },
          ]
        }
      ]
    },
    
  ]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Categories[]>
) {
  res.status(200).json(categoriesData)
}
