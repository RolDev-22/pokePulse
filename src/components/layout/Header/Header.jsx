import { Navbar } from "./Nav/Navbar";
import { useState, useEffect } from "react";

export const Header = () => {
  const [scrollControl, setScrollControl] = useState(false);

  //Empleamos para control del posicionamiento del header
  useEffect(() => {
    const handleScroll = () => {
      setScrollControl(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`${scrollControl > 100 ? "position-fixed" : "position-static"} d-flex flex-column p-1 col-12 justify-content-center align-items-center`}>
      <div className="d-flex flex-column p-2 col-11 justify-content-center align-items-center">
        <h1 className="titleFont">PokePlus</h1>
        <Navbar />
      </div>
    </header>
  );
};
