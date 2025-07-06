export interface TripType {
  title: string;
  images: string;
  description: string;
  price: string;
}

const TripTypes: TripType[] = [
  {
    title: "Honeymoon",
    images: "/images/couple.jpg",
    description:"Romantic getaways in stunning destinations. Perfect for newlyweds looking to create unforgettable memories.",
    price: "From Ksh.30,000 per couple",
  },
  {
    title: "Family",
    images: "/images/family.jpg",
    description:"Fun-filled packages designed for the whole family with activities for all ages.",
    price: "From Ksh.5,000 per person",
  },
  {
    title: "Adventure",
    images: "/images/adventure.jpg",
    description:"Thrilling activities like hiking, mountain climbing, and rafting for adrenaline junkies.",
    price: "From Ksh.2,000 per person",
  },
  {
    title: "Cultural Tours",
    images: "/images/culture.jpg",
    description: "Experience rich cultural heritage and traditional lifestyles across Kenya.",
    price: "From Ksh.2,500 per person",
  },
  {
    title: "Wildlife Safaris",
    images: "/images/wildlife.jpg",
    description:"Guided safaris to see the Big Five and more in their natural habitat.",
    price: "From Ksh.5,500 per person",
  },
  {
    title: "Eco-Tours",
    images: "/images/eco-tours.jpg",
    description:"Environmentally friendly travel experiences focused on nature conservation.",
    price: "From Ksh.1,000 per person",
  },
  {
    title: "Luxury Vacations",
    images: "/images/luxury.jpg",
    description:"Premium services and accommodations for a truly exclusive holiday.",
    price: "From Ksh.15,000 per person",
  },
  {
    title: "Beach Holidays",
    images: "/images/beach-holiday.jpg",
    description: "Relax on Kenya’s white sand beaches and enjoy the tropical climate.",
    price: "From Ksh.10,000 per person",
  },
  {
    title: "Wellness Retreats",
    images: "/images/retreat.jpg",
    description:"Rejuvenate your mind and body with wellness and spa treatments.",
    price: "From Ksh.5,000 per person",
  },
  {
    title: "Culinary Tours",
    images: "/images/culinary.jpg",
    description:"Taste local dishes and learn to cook authentic Kenyan meals.",
    price: "From Ksh.3,000 per person",
  },
];

export default TripTypes;
