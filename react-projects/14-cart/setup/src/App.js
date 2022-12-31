import React from "react";
import { useGlobalContext } from "./context";

// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import Spinner from "./spinner/spinner.component";
// items

function App() {
  const { isLoading } = useGlobalContext();
  
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
