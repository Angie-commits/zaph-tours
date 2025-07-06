export interface Destination {
  name: string;
  image: string;
  description: string;
  price: string;
}

const featuredDestinations: Destination[] = [
  {
    name: "Mt. Kenya",
    image: "/images/mt.kenya.jpg",
    description: "Trek Africa’s second highest peak with breathtaking views.",
    price: "ksh.5,000 per person",
  },
  {
    name: "Mt. Ruwenzori",
    image: "/images/ruwenzori.jpg",
    description: "Explore the legendary Mountains of the Moon.",
    price: "ksh.5000 per person",
  },
  {
    name: "Lake Nakuru",
    image: "/images/l.nakuru.jpg",
    description: "See flamingos and rhinos in this beautiful park.",
    price: "ksh.2000 per person",
  },
  {
    name: "Tsavo National Park",
    image: "/images/park.jpg",
    description: "Kenya’s largest park with diverse wildlife and landscapes.",
    price: "ksh.1000 per person",
  },
  {
    name: "Nairobi National Park",
    image: "/images/nairobi park.jpg",
    description: "A unique park within the city with iconic animals.",
    price: "ksh.500 per person",
  },
  {
    name: "Coastal Kenya",
    image: "/images/coastal.jpg",
    description: "Relax on white sandy beaches and explore Swahili culture.",
    price: "ksh.1500 per person",
  },
];

export default featuredDestinations;
