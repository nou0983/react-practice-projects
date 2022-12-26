import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useAppContext } from "./context";

const Navbar = () => {
  const { openSidebar, closeSubmenu, openSubmenu } = useAppContext();

  const mouseOverHandler = ({ target }) => {
    const text = target.textContent;
    const tempBtn = target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(text, { center, bottom });
  };

  const mouseOverOnNavHandler = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <nav className="nav" onMouseOver={mouseOverOnNavHandler}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Stripe" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseEnter={mouseOverHandler}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseEnter={mouseOverHandler}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseEnter={mouseOverHandler}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
