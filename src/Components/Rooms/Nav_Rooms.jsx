import React from 'react';
import { Link } from "react-router-dom";

const rooms = [
  { title: 'Chambre Double Deluxe', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',link:'/Double_Deluxe' },
  { title: 'Chambre Single Deluxe', image: 'https://images.pexels.com/photos/3288100/pexels-photo-3288100.png?auto=compress&cs=tinysrgb&w=600',link:'/Single_Deluxe' },
  { title: 'Chambre Double Premium', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' ,link:'/Double_Premium'},
  { title: 'Chambre Single Premium', image: 'https://images.pexels.com/photos/3288100/pexels-photo-3288100.png?auto=compress&cs=tinysrgb&w=600' ,link:'/Single_Premium'},
  { title: 'Chambre Triple', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' ,link:'/Single_Deluxe'},
  { title: 'Suite Junior', image: 'https://images.pexels.com/photos/3288100/pexels-photo-3288100.png?auto=compress&cs=tinysrgb&w=600' ,link:'/Single_Premium'},
  
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
    <div className="max-w-[800px] mx-auto px-5 py-30">
      <h1 className="text-center text-4xl font-bold mb-10">Chambres & Suites</h1>
      <div className="flex flex-col gap-5">
        {rooms.map((room, index) => (
          <Link to={room.link}>
          <RoomCard key={index} title={room.title} image={room.image} /></Link>
          
        ))}
      </div>
    </div>
  );
}
