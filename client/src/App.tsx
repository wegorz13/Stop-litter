import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import axios from "axios";
import MainPage from "./mainpage/MainPage";
import Form from "./form/form";

function App() {
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:5000/api");
    console.log(response);
  };

  useEffect(() => {
    fetchAPI();
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
