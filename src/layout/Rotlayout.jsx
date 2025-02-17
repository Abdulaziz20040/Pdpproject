import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Rotlayout() {
  return (
    <div className="flex flex-col min-h-screen container">
      <Header />
      <main className="flex-grow mt-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Rotlayout;
