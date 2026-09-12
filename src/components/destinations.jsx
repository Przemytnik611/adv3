import React, { useEffect, useState } from "react";

const destinations = [
  {
    title: "ROZTOCZE",
    text: "Kręte drogi. Lasy. Cisza.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
  },
  {
    title: "BIESZCZADY",
    text: "Góry zaczynają się tutaj.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80"
  },
  {
    title: "TATRY",
    text: "Przełęcze i górskie drogi.",
    image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1400&q=80"
  },
  {
    title: "SŁOWACJA",
    text: "Ruszaj dalej.",
    image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1400&q=80"
  }
];

function Destinations() {
  return (
    <section className="destinations">
      <h2 className="section-title">MIEJSCA,<br />KTÓRE WARTO<br />ZOBACZYĆ.</h2>
      <div className="destination-grid">
        {destinations.map((destination) => (
          <article className="destination" key={destination.title}>
            <img src={destination.image} alt={destination.title} />
            <div className="destination-info">
              <h3>{destination.title}</h3>
              <p>{destination.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Destinations;