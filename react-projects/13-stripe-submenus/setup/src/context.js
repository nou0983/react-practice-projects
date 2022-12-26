import React, { createContext, useState, useContext } from "react";
import App from "./App";
import sublinks from "./data";

const AppContext = createContext({ links: [], setLinks: () => {} });

const AppContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = (text, coordinates) => {
    const newPage = sublinks.find((link) => link.page === text);

    setLocation(coordinates);
    setPage(newPage);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const value = {
    isSidebarOpen,
    openSidebar,
    closeSidebar,
    isSubmenuOpen,
    openSubmenu,
    closeSubmenu,
    location,
    page,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContextProvider, useAppContext };
