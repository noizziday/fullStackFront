import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
