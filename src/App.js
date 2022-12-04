import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";
import HotelsContextProvider from "./contexts/HotelsContextProvider";

const App = () => {
  return (
    <>
      <HotelsContextProvider>
        <Navbar />
        <MainRoutes />
        <Footer />
      </HotelsContextProvider>
    </>
  );
};

export default App;
