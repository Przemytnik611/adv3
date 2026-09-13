import React, { useEffect, useState } from "react";

const motorcycles = [
  {
    name: "BMW R 1300 GS Adventure Triple Black",
    // description: "Lekki. Dynamiczny. Idealny na długie trasy.",
    price: 500,
    image: "public/images/gstri.png"
  },
  {
    name: "BMW R 1300 GS Adventure GS Trophy",
    // description: "Uniwersalny motocykl na asfalt i góry.",
    price: 500,
    image: "public/images/gstrop.png"
  }
];

function Motorcycles() {
  return (
    <section className="motorcycles" id="motocykle">
      <h2 className="section-title">WYBIERZ<br />MOTOCYKL</h2>
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