import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../components/App";
const Routers = () => {
  return (
    <Routes>
      <Route>
        <Route path="/formBuilder" element={<App />} />
      </Route>
    </Routes>
  );
};

export default Routers;
