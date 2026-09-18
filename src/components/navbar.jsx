import React, { useEffect, useState } from "react";

function Navbar() {
  return (
    <nav>
      <a className="logo" href="#top">Adventure Moto Globe Touring</a>
      {/* <a className="name" href="#top">ADV-MOTO-GT</a> */}
      <div className="menu">
      <a href="#motocykle">MOTOCYKLE</a>
        <a href="#rezerwacja">REZERWACJA</a>
        <a href="#kontakt">KONTAKT</a>
      </div>
    </nav>
  );
}

export default Navbar;