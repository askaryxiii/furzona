import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import LoginReg from "./pages/LoginReg";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginReg />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
