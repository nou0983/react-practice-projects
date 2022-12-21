import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useToggleContext } from "./context";

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useToggleContext();

  return (
    <aside className={`sidebar ${showSidebar ? "show-sidebar" : ""}`}>
      <div className="sidebar-header">
        <img src={logo} alt="Coding addict" className="logo" />
        <button className="close-btn" onClick={() => setShowSidebar(false)}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map(({ id, url, text, icon }) => {
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map(({ id, url, icon }) => {
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
