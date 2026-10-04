

import { useRef, useEffect, useState } from "react";
import React from "react";

export default function MapStory() {


  return (
    <div style={{ position: "relative", minHeight: "250vh", padding: "10vh 0", border: "2px solid white", boxSizing: "border-box" }}>
      <div  style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)" }}>
        <h2> tutaj mapa </h2>
      </div>
      <div style={{ position: "absolute", top: "5%", left: "5%", transform: "translateX(0%)",fontSize: "clamp(30px, 2vw, 12px)", lineHeight: "2", letterSpacing: "1px", textTransform: "uppercase" }}>
       Zajmujemy się<br/>
       profesjonalnym wynajmem<br/>motocykli adventure
      </div>
      <div style={{ position: "absolute", top: "45%", left: "50%", transform: "translateX(0%)",fontSize: "clamp(20px, 2vw, 12px)", lineHeight: "2", letterSpacing: "1px", textTransform: "uppercase" }}>
          Oferujemy wynajem motocykli klasy premium dla tych, <br/>
          którzy chcą odkrywać nowe miejsca z dala od utartych szlaków.<br/>
          Oferujemy starannie wybrane motocykle adventure <br/>
          idealne zarówno na weekendowe wypady, jak i wielodniowe podróże po Polsce i Europie. 
      </div>
      <div style={{ position: "absolute", top: "65%", left: "2%", transform: "translateX(0%)",fontSize: "clamp(20px, 2vw, 12px)", lineHeight: "2", letterSpacing: "1px", textTransform: "uppercase" }}>
          Odbierasz motocykl w Zamościu, Lublinie, Rzeszowie lub w każdym innym miejscu w Polsce,<br/>
          wybierasz kierunek i ruszasz w drogę — bez zbędnych formalności. <br/>
          Stawiamy na jakość i bezpieczeństwo.<br/>
          Nasze motocykle to nowe, nowoczesne maszyny klasy premium,<br/>
          regularnie serwisowane i przygotowywane do każdej kolejnej podróży.<br/>
          Każdy motocykl przed wydaniem przechodzi dokładną kontrolę techniczną, <br/>
          jest czysty, zadbany i w pełni sprawny. <br/>
          abyś mógł bez obaw ruszyć w drogę.<br/>
          Zasada jest prosta: odbierasz motocykl, który sami chcielibyśmy dostać.
      </div>
       <div style={{ position: "absolute", top: "85%", left: "50%", transform: "translateX(0%)",fontSize: "clamp(20px, 2vw, 12px)", lineHeight: "2", letterSpacing: "1px", textTransform: "uppercase" }}>
          <h2>Wybierz → zarezerwuj → odbierz → ruszaj.</h2> 
          Wybierz swój motocykl, określ termin podróży i zarezerwuj online.<br/>
          Od razu wiesz, co rezerwujesz i ile płacisz.<br/>
          My zajmiemy się przygotowaniem motocykla,<br/>
          a Ty możesz skupić się na planowaniu trasy.<br/>
          Prosto. Przejrzyście. Bez zbędnych formalności, bez ukrytych kosztów.<br/>
          Tak, jak powinien wyglądać wynajem motocykla.
      </div>
    </div>
  );
}

