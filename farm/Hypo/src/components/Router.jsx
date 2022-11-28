import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hypoth from "./components/Hypoth";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Hypoth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
