import rainbowHouses from "./img/img.jpg";
import { useState } from "react";

export default function Picture() {
  const [active, setActive] = useState(false);

  const handleClickDiv = () => {
    console.log("Клк по диву");
    setActive(false);
  };

  const handleClickImg = (e) => {
    e.stopPropagation();
    console.log("Клик по картинке");

    setActive(true);
  };

  return (
    <div
      className={`background ${active ? "" : "active"}`}
      onClick={handleClickDiv}
    >
      <img
        className={`picture ${active ? "active" : ""}`}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src={rainbowHouses}
        onClick={(e) => handleClickImg(e)}
      />
    </div>
  );
}
