import React, { useState } from "react";

const restaurants = [
  {
    name: "Chambres de Luxe & Confort Moderne",
    location: "Offrez-vous une nuit paisible dans un cadre élégant.",
    description:
      "Nos chambres sont équipées de lits king-size, de téléviseurs dernière génération, d’un mini-bar, d’un bureau et d’une salle de bain privative avec produits de toilette haut de gamme. L’ambiance cosy et moderne assure un confort exceptionnel.",
    image: "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg", // remplacez par le bon chemin d'image
  },
  {
    name: "Restaurant Gastronomique",
    location: "Savourez une cuisine raffinée au cœur de l’hôtel",
    description:
      "Notre chef vous propose des menus inspirés des saveurs locales et internationales. Que ce soit pour un dîner romantique ou un repas d’affaires, notre restaurant offre une expérience culinaire unique dans un cadre élégant.",
    image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // remplacez par le bon chemin d'image
  },
  {
    name: "Centre de Bien-être & Spa",
    location: "Prenez soin de vous dans un espace de détente absolue.",
    description:
      "Massages, soins du visage, hammam, sauna et jacuzzi sont à votre disposition. Nos professionnels du bien-être vous accueillent pour des instants de relaxation inoubliables",
    image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // remplacez par le bon chemin d'image
  },
  {
    name: "Réception & Conciergerie 24h/24",
    location: "Un accueil personnalisé à toute heure.",
    description:
      "Notre équipe est disponible jour et nuit pour vous assister dans vos demandes : réservation de taxi, recommandations touristiques, bagagerie, etc.",
    image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // remplacez par le bon chemin d'image
  },
  // Vous pouvez ajouter d'autres objets ici si vous voulez plusieurs slides
];

export default function RestaurantSlider() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + restaurants.length) % restaurants.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % restaurants.length);
  };


  const { name, location, description, image } = restaurants[index];

  return (
    <section className="py-16 px-4 md:px-20 bg-white">
      <h2 className="text-4xl text-center mb-12">Nos Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Panel */}
        <div className="bg-[#f8f6f1] p-10 rounded-lg relative">
          <h3 className="text-3xl mb-2">{name}</h3>
          <h4 className="text-lg font-semibold mb-4">{location}</h4>
          <p className="text-gray-700 mb-6">{description}</p>
          <button className="border border-black px-5 py-2 hover:bg-black hover:text-white transition">
            En savoir plus
          </button>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10">
            <button
              onClick={prevSlide}
              className="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white"
            >
              &#8592;
            </button>
            <span className="text-sm text-gray-600">
              {index + 1} / {restaurants.length}
            </span>
            <button
              onClick={nextSlide}
              className="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Right Panel */}
        <div>
          <img
            src={image}
            alt={name}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
