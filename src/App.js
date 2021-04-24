import React, { useState } from "react";
import "./styles.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

export default function App() {
  const [menuToggle, setMenuToggle] = useState(false);
  const menus = ["Home", "About", "Contact"];
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">The Navigation</div>
          <ul className={`${menuToggle && "slide"}`}>
            {menus.map((menu) => (
              <li>
                <Link to="#" onClick={() => setMenuToggle(false)}>
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mobile" onClick={() => setMenuToggle(!menuToggle)}>
            {!menuToggle ? <MenuIcon /> : <CloseIcon />}
          </div>
        </nav>
      </div>
    </header>
  );
}
