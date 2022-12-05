import React from "react";
import AuthContextProvider from "./authContext";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";
import HotelsContextProvider from "./contexts/HotelsContextProvider";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <HotelsContextProvider>
          <Navbar />
          <MainRoutes />
          <Footer />
        </HotelsContextProvider>
      </AuthContextProvider>
    </>
  );
};

export default App;
