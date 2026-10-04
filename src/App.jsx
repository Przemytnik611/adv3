import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import MapStory from "./components/mapStory";
import Motorcycles from "./components/Motorcycles";
import Booking from "./components/booking";
import Footer from "./components/footer";
import PriceList from "./components/PriceList";
import "./styles.css";


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MapStory />
        <Motorcycles />
        <Booking />
        <PriceList />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);