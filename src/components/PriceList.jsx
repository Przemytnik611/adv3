import React, { useEffect, useState } from "react";

function PriceList() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", padding: "10vh 0", border: "2px solid white", boxSizing: "border-box" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translateX(-50%)",fontSize: "clamp(30px, 2vw, 12px)", lineHeight: "2", letterSpacing: "1px", textTransform: "uppercase" }}>
       tutaj cennik i wypunktowane uproszczone główne warunki wynajmu
      </div>
    </div>
  );
}

export default PriceList;