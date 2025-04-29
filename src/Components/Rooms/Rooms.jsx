
import React from 'react';

const rooms = [
  { title: 'Chambre Standard', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
  { title: 'Chambre Supérieure', image: 'https://images.unsplash.com/photo-1613977257363-707ba9348220?auto=format&fit=crop&w=800&q=80' },
  { title: 'Chambre Deluxe', image: 'https://images.unsplash.com/photo-1560448075-bb5b4e5b3c7d?auto=format&fit=crop&w=800&q=80' },
  { title: 'Chambre Lits Jumeaux Standard', image: 'https://images.unsplash.com/photo-1578898884015-89d858b79e04?auto=format&fit=crop&w=800&q=80' },
  { title: 'Chambre Lits Jumeaux Supérieure', image: 'https://images.unsplash.com/photo-1600585154205-2aa5da8b73c4?auto=format&fit=crop&w=800&q=80' },
  { title: 'Chambre Gauthier', image: 'https://images.unsplash.com/photo-1576671081835-a1f9899b2dd1?auto=format&fit=crop&w=800&q=80' },
  { title: 'Suite Junior', image: 'https://images.unsplash.com/photo-1560067174-894b1d72705e?auto=format&fit=crop&w=800&q=80' },
  { title: 'Suite Gauthier', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80' },
  { title: 'Suite Affaires', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80' },
  { title: 'Suite Prestige', image: 'https://images.unsplash.com/photo-1600585153780-6583bba8d3ff?auto=format&fit=crop&w=800&q=80' },
];

const RoomCard = ({ title, image }) => (
  <div className="relative overflow-hidden rounded-lg shadow-lg">
    <img src={image} alt={title} className="w-full h-[300px] object-cover" />
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
      <h2 className="text-white text-2xl font-bold text-center">{title}</h2>
    </div>
  </div>
);

export default function Rooms() {
  return (
    <div className="max-w-[800px] mx-auto px-5 py-10">
      <h1 className="text-center text-4xl font-bold mb-10">Chambres & Suites</h1>
      <div className="flex flex-col gap-5">
        {rooms.map((room, index) => (
          <RoomCard key={index} title={room.title} image={room.image} />
        ))}
      </div>
    </div>
  );
}
=======
import React from "react";
import "./Rooms.css";

const rooms = [
  {
    title: "Superior",
    size: "25-28m²",
    type: "Double/Twin",
    features: "Standing shower",
    price: { sundayToThursday: "780,000", fridayToSunday: "780,000" },
    image: "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg",
  },
  {
    title: "Deluxe",
    size: "30-32m²",
    type: "Double/Twin",
    features: "Standing shower",
    price: { sundayToThursday: "800,000", fridayToSunday: "800,000" },
    image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Superior",
    size: "25-28m²",
    type: "Double/Twin",
    features: "Standing shower",
    price: { sundayToThursday: "780,000", fridayToSunday: "780,000" },
    image: "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg",
  },
  {
    title: "Deluxe",
    size: "30-32m²",
    type: "Double/Twin",
    features: "Standing shower",
    price: { sundayToThursday: "800,000", fridayToSunday: "800,000" },
    image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Superior",
    size: "25-28m²",
    type: "Double/Twin",
    features: "Standing shower",
    price: { sundayToThursday: "780,000", fridayToSunday: "780,000" },
    image: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg",
  },
  {
    title: "Superior",
    size: "25-28m²",
    type: "Double/Twin",
    features: "Standing shower",
    price: { sundayToThursday: "780,000", fridayToSunday: "780,000" },
    image: "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg",
  },
  {
    title: "Deluxe",
    size: "30-32m²",
    type: "Double/Twin",
    features: "Standing shower",
    price: { sundayToThursday: "800,000", fridayToSunday: "800,000" },
    image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Superior",
    size: "25-28m²",
    type: "Double/Twin",
    features: "Standing shower",
    price: { sundayToThursday: "780,000", fridayToSunday: "780,000" },
    image: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg",
  },
  {
    title: "Superior",
    size: "25-28m²",
    type: "Double/Twin",
    features: "Standing shower",
    price: { sundayToThursday: "780,000", fridayToSunday: "780,000" },
    image: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg",
  },
];

const RoomCard = ({ room }) => {
  return (
    <div className="room-card">
      <img src={room.image} alt={room.title} className="room-image" />
      <h3>{room.title}</h3>
      <p>{room.type} - {room.size}</p>
      <p>{room.features}</p>
      <div className="price">
        <span>From Sunday to Thursday: {room.price.sundayToThursday} VND</span>
        <span>From Friday to Sunday: {room.price.fridayToSunday} VND</span>
      </div>
      <button className="detaille-btn">plus de detaille</button>
    </div>
  );
};

const Rooms = () => {
  return (
    <div className="hotel-rooms">
      {rooms.map((room, index) => (
        <RoomCard key={index} room={room} />
      ))}
    </div>
  );
};

export default Rooms;
