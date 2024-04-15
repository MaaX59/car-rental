import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { SlClose } from "react-icons/sl";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="app__navbar">
      <div className="app__navbar_logo">
        <img src={logo} alt="logo" />
        <span>
          <h1>Dream</h1>Rental
        </span>
      </div>
      <div className="app__navbar_list">
        <ul>
          <li>
            <a href="#book">Book</a>
          </li>
          <li>
            <a href="#fleet">Models</a>
          </li>
          <li>
            <a href="#contact">About</a>
          </li>
          <li>
            {" "}
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          className="app__navbar-smallscreen-menu"
          size={30}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen-overlay slide-bottom">
            <SlClose
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen-links">
              <li>
                <a
                  onClick={() => {
                    setToggleMenu(!toggleMenu);
                  }}
                  href="#book"
                >
                  Book
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setToggleMenu(!toggleMenu);
                  }}
                  href="#fleet"
                >
                  Models
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setToggleMenu(!toggleMenu);
                  }}
                  href="#contact"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setToggleMenu(!toggleMenu);
                  }}
                  href="#faq"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="app__navbar_login">
        <h3>Sign In</h3>
        <span>Register</span>
      </div>
    </div>
  );
};

export default Navbar;
