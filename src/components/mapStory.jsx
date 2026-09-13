

import { useRef, useEffect, useState } from "react";
import React from "react";

export default function MapStory() {
  const videoRef = useRef(null);
  const isVisibleRef = useRef(false); // Śledzi, czy wideo jest na ekranie
  const scrollTimeoutRef = useRef(null); // Śledzi moment zakończenia scrollowania

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // 1. Sprawdzamy, czy wideo jest widoczne na ekranie
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (!entry.isIntersecting) {
          videoElement.pause(); // Jeśli uciekło z ekranu -> pauza
        }
      },
      { threshold: 0.2 } // Reaguje, gdy min. 20% wideo jest widoczne
    );
    observer.observe(videoElement);

    // 2. Funkcja obsługująca scrollowanie
    const handleScroll = () => {
      // Jeśli wideo nie jest widoczne, nic nie rób
      if (!isVisibleRef.current) return;

      // Spróbuj odtworzyć wideo podczas ruchu
      if (videoElement.paused) {
        videoElement.play().catch((err) => console.log("Blokada autoodtwarzania:", err));
      }

      // Czyszczenie poprzedniego timeoutu (użytkownik wciąż scrolluje)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Jeśli użytkownik nie przewinie ekranu przez 150ms, zatrzymaj wideo
      scrollTimeoutRef.current = setTimeout(() => {
        videoElement.pause();
      }, 150);
    };

    // Nasłuchiwanie scrollowania na całym oknie
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Czyszczenie zdarzeń przy odmontowaniu komponentu
    return () => {
      observer.unobserve(videoElement);
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <div style={{ minHeight: "100vh", padding: "10vh 0" }}> {/* Sztuczny margines do testowania scrolla */}
      <video
        ref={videoRef}
        muted
        playsInline
        loop
         style={{
          width: "100vw",          // Pełna szerokość okna przeglądarki
          height: "auto",          // Automatyczna wysokość zachowująca proporcje
          maxHeight: "150vh",       // Opcjonalnie: ogranicza wysokość, by nie zasłonić całego ekranu w pionie
               // Ładnie dopasowuje klatki wideo do pełnej szerokości
          display: "block",
          margin: "0",
          padding: "0"
        }}
      >
        <source src="public/videos/download.mp4" type="video/mp4" />
        Twój edytor nie obsługuje tagu video.
      </video>
    </div>
  );
}


//   return (
//     <section className="map-section" id="trasy">
//       <div className="map-sticky">
//         <div className="map-background" />
//         <div className="map-video-wrap">
//           <video
//             className="map-video"
//             src="/videos/download.mp4"
//             autoPlay
//             muted
//             loop
//             playsInline
//             preload="auto"
//           />
//         </div>
//         <div className="map-vignette" />
//         <div className="map-title">
//           <h2>ONE ROAD <br /> MANY STORIES</h2>
//           <small>RUSZAJ PRZED SIEBIE.</small>
//         </div>
//       </div>
//     </section>
//   );
// }
// export default MapStory