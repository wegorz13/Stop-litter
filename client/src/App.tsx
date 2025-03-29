import {useEffect } from "react";
import "./App.css";
import axios from "axios";
import Form from "./mainpage/form.tsx";

function App() {

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:5000/api");
    console.log(response);
  };

  useEffect(() => {
    fetchAPI();
  });

  return (
    <>
     <Form/>
    </>
  );
}

export default App;
