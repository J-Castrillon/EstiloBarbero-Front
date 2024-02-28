import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Articles } from "../components/pages/Articles";
import { Article } from "../components/pages/Article";
import { Blog } from "../components/Blog";
import { Create } from "../components/pages/Create";
import { Edit } from "../components/pages/Edit";
import { Search } from "../components/pages/Search";
import { Error } from "../components/pages/Error";
import { About } from "../components/pages/About";

export const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Blog />}>
          <Route path="Home" element={<Home />} />
          <Route path="" element={<Home />} />
          <Route path="Articles" element={<Articles />} />
          <Route path="Article/:id" element={<Article />} />
          <Route path="Create" element={<Create />} />
          <Route path="Edit/:id" element={<Edit />} />
          <Route path="Search" element={<Search />} />
          <Route path="About" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
