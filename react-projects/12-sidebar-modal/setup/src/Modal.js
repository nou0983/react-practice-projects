import React from "react";
import { FaTimes } from "react-icons/fa";
import { useToggleContext } from "./context";
const Modal = () => {
  const { showModal, setShowModal } = useToggleContext();
  return (
    <div className={`modal-overlay ${showModal ? "show-modal" : ''}`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={() => setShowModal(false)}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
