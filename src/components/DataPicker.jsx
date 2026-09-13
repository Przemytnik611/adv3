import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './DataPicker.css'; 

// Przykład dat już zarezerwowanych wyciągniętych z bazy danych
const BOOKED_DATES = [
  new Date(2026, 8, 15), // 15 Września 2026
  new Date(2026, 8, 16),
  new Date(2026, 8, 20)
];

export default function DataPicker() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const handleBooking = () => {
    if (!startDate || !endDate) {
      alert("Proszę wybrać pełny zakres dat!");
      return;
    }
    
    console.log("Zarezerwowano od:", startDate, "do:", endDate);
    // Tutaj wysyłasz zapytanie POST do swojego backendu
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Wybierz termin wynajmu</h2>
      
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => setDateRange(update)}
        excludeDates={BOOKED_DATES}
        minDate={new Date()} // Blokada dat przeszłych
        placeholderText="Kliknij, aby wybrać zakres dni"
        inline // Wyświetla kalendarz na stałe, a nie w popoverze
      />

      <div style={{ marginTop: '15px' }}>
        <button onClick={handleBooking} disabled={!startDate || !endDate}>
          Zarezerwuj teraz
        </button>
      </div>
    </div>
  );
}
