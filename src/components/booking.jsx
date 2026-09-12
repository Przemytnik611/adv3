import React, { useEffect, useState } from "react";

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
export default Booking