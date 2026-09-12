import React, { useEffect, useState } from "react";

const motorcycles = [
  {
    name: "YAMAHA TRACER 7",
    description: "Lekki. Dynamiczny. Idealny na długie trasy.",
    price: 450,
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=85"
  },
  {
    name: "HONDA TRANSALP 750",
    description: "Uniwersalny motocykl na asfalt i góry.",
    price: 450,
    image: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=1200&q=85"
  }
];

function Motorcycles() {
  return (
    <section className="motorcycles" id="motocykle">
      <h2 className="section-title">WYBIERZ<br />SWOJĄ MASZYNĘ.</h2>
      <div className="bikes">
        {motorcycles.map((bike) => (
          <article className="bike" key={bike.name}>
            <div className="bike-image">
              <img src={bike.image} alt={bike.name} />
            </div>
            <div className="bike-info">
              <h3>{bike.name}</h3>
              <p>{bike.description}</p>
              <div className="price">{bike.price} zł <span>/ dzień</span></div>
              <a href="#rezerwacja" className="button">REZERWUJ</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Motorcycles