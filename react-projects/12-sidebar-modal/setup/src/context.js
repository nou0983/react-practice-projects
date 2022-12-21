import { createContext, useState, useContext } from "react";

export const ToggleContext = createContext({
  showModal: false,
  setShowModal: () => {},
  showSidebar: false,
  setShowSidebar: () => {},
});

export const ToggleContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const value = {
    showModal,
    setShowModal,
    showSidebar,
    setShowSidebar,
  };

  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
};

export const useToggleContext = () => {
  return useContext(ToggleContext);
}