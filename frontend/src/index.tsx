import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "styles/styles-core.scss";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/404";
import MainTemplate from "./templates/MainTemplate";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainTemplate />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
