import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import eliteLogo from "../assets/images/myLogo.png"; // Import the SVG logo
import { socialprofils } from "../content_option";

const Headermain = () => {
  const [isActive, setActive] = useState(false);
  const [isDropdownActive, setDropdownActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  const handleDropdownToggle = () => {
    setDropdownActive(!isDropdownActive);
  };

  const handleDropdownClose = () => {
    setDropdownActive(false);
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between w-100">
          <Link className="navbar-brand nav_ac" to="/">
            <img src={eliteLogo} alt="ELITE Logo" className="elite-logo" /> {/* Use the SVG logo */}
          </Link>
          <nav className="d-none d-md-flex align-items-center">
            <ul className="nav_links d-flex align-items-center">
              <li className="nav_item">
                <Link to="/" className="nav_link">Home</Link>
              </li>
              <li className="nav_item">
                <Link to="/portfolio" className="nav_link">Portfolio</Link>
              </li>
              <li className="nav_item">
                <Link to="/about" className="nav_link">Experience</Link>
              </li>
            </ul>
          </nav>
          <div className="d-flex align-items-center">
            <button className="menu__button nav_ac d-md-none" onClick={handleToggle}>
              {!isActive ? <VscGrabber /> : <VscClose />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/" className="my-3">Home</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/portfolio" className="my-3">Roster</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/about" className="my-3">Company</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/contact" className="my-3">Contact</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/news" className="my-3">News</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
              <a href={socialprofils.facebook}>Facebook</a>
              <a href={socialprofils.github}>Github</a>
              <a href={socialprofils.twitter}>Twitter</a>
            </div>
            <p className="copyright m-0">© ELITE</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
