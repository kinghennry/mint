import React, { useState } from "react";
import { routes } from "./data";
import "./navbar.css";
import { Link } from "react-router-dom";
// this pary and hero section have the same bacground of pink.
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <div className="container">
        <nav className="nav flex sb ai">
          <div className="nav__logo">
            <h3>Climate Ape</h3>
          </div>
          <div
            className="nav__toggle"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <span className={`${toggle ? "span1--active" : ""}`}></span>
            <span style={{ opacity: toggle ? "0" : "" }}></span>
            <span className={`${toggle ? "span3--active" : ""}`}></span>
          </div>
          <ul
            className={`nav__list flex sa ${toggle ? "nav__list--active" : ""}`}
          >
            {routes.map((route) => {
              const { id, link } = route;
              return (
                <>
                  <li className="nav__item" key={id}>
                    <Link to="/" className="nav__link">
                      {link}
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
