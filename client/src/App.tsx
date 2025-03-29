import {useEffect } from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import axios from "axios";
import MainPage from "./mainpage/MainPage";
import Form from "./mainpage/form";

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
        {/*<Route path ="/>chart" element=/>}/>*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
