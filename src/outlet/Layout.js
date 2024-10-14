import React from "react";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "../component/Header";
export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <div className="flex flex-grow">
        <main className="flex-grow p-4">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
