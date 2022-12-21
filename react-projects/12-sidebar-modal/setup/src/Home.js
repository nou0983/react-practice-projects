import React from "react";
import { FaBars } from "react-icons/fa";
import { useToggleContext } from "./context";

const Home = () => {
  const { setShowModal, setShowSidebar } = useToggleContext();

  return (
    <main>
      <button
        type="button"
        className="sidebar-toggle"
        onClick={() => setShowSidebar(true)}
      >
        <FaBars />
      </button>
      <button className="btn" onClick={() => setShowModal(true)}>
        show modal
      </button>
    </main>
  );
};

export default Home;
