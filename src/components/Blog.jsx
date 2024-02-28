import React from "react";
import { Header } from "./layout/Header";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./layout/Sidebar";
import { Footer } from "./layout/Footer";

export const Blog = () => {
  return (
    <div className="main-blog-content">
      <Header />

      <main className="main-content">
        <Outlet />
      </main>

      {/* <Sidebar /> */}
      <Footer />
    </div>
  );
};
