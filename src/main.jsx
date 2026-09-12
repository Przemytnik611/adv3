import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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

function Navbar() {
  return (
    <nav>
      <a className="logo" href="#top">ADVENTURE</a>
      <div className="menu">
        <a href="#trasy">TRASY</a>
        <a href="#motocykle">MOTOCYKLE</a>
        <a href="#rezerwacja">REZERWACJA</a>
        <a href="#kontakt">KONTAKT</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <div className="hero-small">ZAMOŚĆ · POLSKA</div>
        <h1>Twoja<span>droga.</span></h1>
        <p className="hero-text">
          Wynajmij motocykl turystyczny i ruszaj tam,
          gdzie kończy się zwykła podróż.
        </p>
        <a href="#motocykle" className="button">WYBIERZ MOTOCYKL</a>
      </div>
      <div className="scroll">SCROLL</div>
    </section>
  );
}

function MapStory() {
  return (
    <section className="map-section" id="trasy">
      <div className="map-sticky">
        <div className="map-background" />
        <div className="map-grid" />
        <div className="map-title">
          <small>ONE ROAD · MANY STORIES</small>
          <h2>RUSZAJ<br />PRZED SIEBIE.</h2>
        </div>
        <div className="map">
          <div className="route" />
          {[
            ["zamosc", "Zamość"],
            ["roztocze", "Roztocze"],
            ["bieszczady", "Bieszczady"],
            ["tatry", "Tatry"],
            ["slovakia", "Słowacja"]
          ].map(([cls, label]) => (
            <div className={`location ${cls}`} key={cls}>
              <span>{label}</span>
            </div>
          ))}
          <div className="motorcycle">🏍️</div>
        </div>
      </div>
    </section>
  );
}

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

function Booking() {
  const [bike, setBike] = useState(450);
  const [days, setDays] = useState(3);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  useEffect(() => {
    if (!start) return;
    const date = new Date(`${start}T12:00:00`);
    date.setDate(date.getDate() + Math.max(1, Number(days) || 1));
    setEnd(date.toISOString().split("T")[0]);
  }, [start, days]);

  const total = (Number(days) || 1) * Number(bike);

  return (
    <section className="booking" id="rezerwacja">
      <div className="booking-box">
        <h2>ZAREZERWUJ<br />SWOJĄ TRASĘ.</h2>
        <div className="form-grid">
          <div className="field">
            <label>MOTOCYKL</label>
            <select value={bike} onChange={(e) => setBike(e.target.value)}>
              <option value="450">Yamaha Tracer 7</option>
              <option value="450">Honda Transalp 750</option>
            </select>
          </div>
          <div className="field">
            <label>LICZBA DNI</label>
            <input type="number" min="1" value={days} onChange={(e) => setDays(e.target.value)} />
          </div>
          <div className="field">
            <label>ODBIÓR</label>
            <input type="date" value={start} onChange={(e) => setStart(e.target.value)} />
          </div>
          <div className="field">
            <label>ZWROT</label>
            <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} />
          </div>
        </div>
        <div className="total">
          CENA OD:<br />
          <strong>{total.toLocaleString("pl-PL")} zł</strong>
        </div>
        <a href="#kontakt" className="button">PRZEJDŹ DO REZERWACJI</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="kontakt">
      <div><strong>ADVENTURE RENTAL</strong><br />Zamość · Polska</div>
      <div>MOTOCYKLE · TRASY · PRZYGODA</div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MapStory />
        <Destinations />
        <Motorcycles />
        <Booking />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);