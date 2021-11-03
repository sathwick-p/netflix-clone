import React, { useEffect, useState } from "react";
import Logo from "./Netflix_Logo_RGB.png";
import Avatar from "./user.jpg";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={Logo} />
      <img className="nav__avatar" src={Avatar} />
    </div>
  );
}

export default Nav;
