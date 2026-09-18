import React, { useEffect, useState } from "react";

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        {/* <div className="hero-small">ZAMOŚĆ · POLSKA</div> */}
        <h1>your journej 
          <span>has just begun
            </span></h1>
        <p className="hero-text">
          Wynajmij motocykl ADV i ruszaj tam,<br/>
          gdzie kończy się zwykła podróż,<br/> a zaczyna prawdziwa przygoda.
        </p>
        <a href="#motocykle" className="button">WYBIERZ MOTOCYKL</a>
      </div>
      <div className="scroll">SCROLL</div>
    </section>
  );
}

export default Hero;