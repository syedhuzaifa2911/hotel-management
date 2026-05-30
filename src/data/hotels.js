export const hotels = [
  {
    id: 1,
    name: "Royal Palace Hotel",
    city: "Karachi",
    rating: 4.8,
    stars: 5,
    isBest: true,
    locationTag: "Near Clifton Beach, Karachi",
    bedType: "Mixed",

    images: [
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    ],

    rooms: [
      {
        type: "Standard",
        bedType: "Single Bed",
        pricePerNight: 20000,
        maxGuests: 2,
        totalRooms: 10,
        availableRooms: 10,
      },
      {
        type: "Deluxe",
        bedType: "Double Bed",
        pricePerNight: 34200,
        maxGuests: 4,
        totalRooms: 6,
        availableRooms: 6,
      },
    ],
    availableFrom: "2026-02-01",
    availableTo: "2026-11-30",
  },

  {
    id: 2,
    name: "Ocean View Resort",
    city: "Karachi",
    rating: 4.7,
    stars: 5,
    isBest: true,
    locationTag: "Near Sea View Road, Karachi",
    bedType: "Double",

    images: [
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
      "https://images.unsplash.com/photo-1551887373-6a8d6f2a0d0a",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    ],

    rooms: [
      {
        type: "Standard",
        bedType: "Single Bed",
        pricePerNight: 90,
        maxGuests: 2,
        totalRooms: 8,
        availableRooms: 8,
      },
      {
        type: "Suite",
        bedType: "Double Bed",
        pricePerNight: 180,
        maxGuests: 5,
        totalRooms: 4,
        availableRooms: 4,
      },
    ],
    availableFrom: "2026-01-15",
    availableTo: "2026-12-10",
  },

  {
    id: 3,
    name: "Pearl Residency",
    city: "Lahore",
    rating: 4.9,
    stars: 5,
    isBest: true,
    locationTag: "Near Mall Road, Lahore",
    bedType: "Mixed",

    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427",
      "https://images.unsplash.com/photo-1560448075-bb485b067938",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
    ],

    rooms: [
      {
        type: "Standard",
        bedType: "Single Bed",
        pricePerNight: 75,
        maxGuests: 2,
        totalRooms: 15,
        availableRooms: 15,
      },
      {
        type: "Family",
        bedType: "Double Bed",
        pricePerNight: 210,
        maxGuests: 6,
        totalRooms: 3,
        availableRooms: 3,
      },
    ],
    availableFrom: "2026-03-01",
    availableTo: "2026-10-31",
  },

  {
    id: 4,
    name: "Grand Crown",
    city: "Lahore",
    rating: 4.5,
    stars: 4,
    isBest: false,
    locationTag: "Near Liberty Market, Lahore",
    bedType: "Double",

    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1525275305851-d7b8f3f5f0a0",
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2",
    ],

    rooms: [
      {
        type: "Standard",
        bedType: "Single Bed",
        pricePerNight: 70,
        maxGuests: 2,
        totalRooms: 12,
        availableRooms: 12,
      },
    ],
    availableFrom: "2026-01-10",
    availableTo: "2026-09-30",
  },

  {
    id: 5,
    name: "Mountain Breeze",
    city: "Murree",
    rating: 4.8,
    stars: 5,
    isBest: true,
    locationTag: "Near Mall Road, Murree",
    bedType: "Mixed",

    images: [
      "https://images.unsplash.com/photo-1518733057094-95b53143d2a7",
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb210e0",
      "https://images.unsplash.com/photo-1560184897-502a475f7a0d",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457",
    ],

    rooms: [
      {
        type: "Deluxe",
        bedType: "Double Bed",
        pricePerNight: 140,
        maxGuests: 4,
        totalRooms: 6,
        availableRooms: 6,
      },
    ],
    availableFrom: "2026-05-01",
    availableTo: "2026-09-15",
  },

  {
    id: 6,
    name: "Hilltop Retreat",
    city: "Murree",
    rating: 4.4,
    stars: 4,
    isBest: false,
    locationTag: "Near Patriata Chairlift, Murree",
    bedType: "Single",

    images: [
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    ],

    rooms: [
      {
        type: "Standard",
        bedType: "Single Bed",
        pricePerNight: 100,
        maxGuests: 2,
        totalRooms: 9,
        availableRooms: 9,
      },
    ],
    availableFrom: "2026-04-01",
    availableTo: "2026-10-15",
  },

  {
    id: 7,
    name: "Capital Heights",
    city: "Islamabad",
    rating: 4.9,
    stars: 5,
    isBest: true,
    locationTag: "Near F-6 Markaz, Islamabad",
    bedType: "Mixed",

    images: [
      "https://images.unsplash.com/photo-1551887373-6a8d6f2a0d0a",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
      "https://images.unsplash.com/photo-1505692794403-34d4982e3e2d",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
    ],

    rooms: [
      {
        type: "Suite",
        bedType: "Double Bed",
        pricePerNight: 190,
        maxGuests: 5,
        totalRooms: 5,
        availableRooms: 5,
      },
    ],
    availableFrom: "2026-01-01",
    availableTo: "2026-12-31",
  },

  {
    id: 8,
    name: "Blue Sky Hotel",
    city: "Islamabad",
    rating: 4.6,
    stars: 4,
    isBest: false,
    locationTag: "Near Blue Area, Islamabad",
    bedType: "Double",

    images: [
      "https://images.unsplash.com/photo-1551887373-6a8d6f2a0d0a",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
      "https://images.unsplash.com/photo-1505692794403-34d4982e3e2d",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
    ],

    rooms: [
      {
        type: "Standard",
        bedType: "Single Bed",
        pricePerNight: 85,
        maxGuests: 2,
        totalRooms: 10,
        availableRooms: 10,
      },
    ],
    availableFrom: "2026-02-15",
    availableTo: "2026-11-01",
  },

  {
    id: 9,
    name: "Desert Pearl",
    city: "Bahawalpur",
    rating: 4.3,
    stars: 4,
    isBest: false,
    locationTag: "Near Noor Mahal, Bahawalpur",
    bedType: "Single",

    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    ],

    rooms: [
      {
        type: "Standard",
        bedType: "Single Bed",
        pricePerNight: 65,
        maxGuests: 2,
        totalRooms: 13,
        availableRooms: 13,
      },
    ],
    availableFrom: "2026-03-15",
    availableTo: "2026-10-01",
  },

  {
    id: 10,
    name: "Sunrise Inn",
    city: "Multan",
    rating: 4.5,
    stars: 4,
    isBest: false,
    locationTag: "Near Cantt Area, Multan",
    bedType: "Mixed",

    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427",
      "https://images.unsplash.com/photo-1560448075-bb485b067938",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
    ],

    rooms: [
      {
        type: "Standard",
        bedType: "Single Bed",
        pricePerNight: 60,
        maxGuests: 2,
        totalRooms: 16,
        availableRooms: 16,
      },
    ],
    availableFrom: "2026-01-20",
    availableTo: "2026-12-01",
  },
];