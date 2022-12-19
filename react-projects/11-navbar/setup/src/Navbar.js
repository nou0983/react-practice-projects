import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (isShow) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0";
    }
  }, [isShow]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            <img src={logo} alt="Coding addict" />
          </a>
          <button className="nav-toggle" onClick={() => setIsShow(!isShow)}>
            <FaBars />
          </button>
        </div>

        <div
          className={`links-container ${isShow && "show-container"}`}
          ref={linksContainerRef}
        >
          <ul className="links" ref={linksRef}>
            {links.map(({ id, url, text }) => {
              return (
                <li key={id}>
                  <a href={url}> {text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map(({ id, url, icon }) => {
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
