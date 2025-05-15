import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import LoginReg from "./pages/login/LoginReg";
import ErrorPage from "./pages/ErrorPage";
import ForgetPass from "./pages/login/ForgetPass";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginReg />} />
      <Route path="/home" element={<Home />} />
      <Route path="/*" element={<ErrorPage />} />
      <Route path="/forgetPassword" element={<ForgetPass />} />
    </Routes>
  );
}

export default App;
