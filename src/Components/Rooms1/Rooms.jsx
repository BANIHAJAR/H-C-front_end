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
