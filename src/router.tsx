import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Setup from "./pages/Setup";

function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={<Home />}
          />
        <Route
          path="/setup"
          element={<Setup />}
          />
        <Route
          path="/"
          element={ <Navigate replace to="/setup" /> } 
          />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
