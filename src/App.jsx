import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import MapStory from "./components/mapStory";
import Destinations from "./components/destinations";
import Motorcycles from "./components/Motorcycles";
import Booking from "./components/booking";
import Footer from "./components/footer";
import DataPicker from "./components/dataPicker";
import PriceList from "./components/PriceList";
import "./styles.css";


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MapStory />
        {/* <Destinations /> */}
        <Motorcycles />
        <Booking />
        <PriceList />
      </main>
      <Footer />
      <DataPicker />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);