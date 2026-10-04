import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <a className="logo" href="#top">Adventure Motorcycles Grand Touring</a>
      {/* <a className="name" href="#top">ADV-MOTO-GT</a> */}
      <div className="menu">
        <a href="#motocykle">MOTOCYKLE</a>
        <a href="#rezerwacja">REZERWACJA</a>
        <a href="#cennik i warunki">CENNIK I WARUNKI</a>
        <a href="#kontakt">KONTAKT</a>
      </div>
    </nav>
  );
}

export default Navbar;