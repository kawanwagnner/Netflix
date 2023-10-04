import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import SignUp from "../pages/SignUp/index";
import AuthHome from "../pages/AuthHome/index";
import Profile from "../pages/Profile/index";
import { Details } from "@material-ui/icons";
import HomePage from "../pages/HomePage/index";

export function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignUp />} />
        <Route path="/preview" element={<AuthHome />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/filmes/Detalhes/:id" element={<Details />} />
        <Route path="*" element={<p>404 - Página não disponível.</p>} />
      </Routes>
    </BrowserRouter>
  );
}
