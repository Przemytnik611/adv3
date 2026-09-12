import React, { useEffect, useState } from "react";

function Navbar() {
  return (
    <nav>
      <a className="logo" href="#top">PRZEM-ADV MEN</a>
      <div className="menu">
      <a href="#motocykle">MOTOCYKLE</a>
        <a href="#rezerwacja">REZERWACJA</a>
        <a href="#kontakt">KONTAKT</a>
      </div>
    </nav>
  );
}

export default Navbar;