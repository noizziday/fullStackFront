import React from "react";
import AuthContextProvider from "./authContext";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
      <Navbar />
      <MainRoutes />
      <Footer />
      </AuthContextProvider>
    </div>
  );
};

export default App;
