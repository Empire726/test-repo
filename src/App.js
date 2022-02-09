import React, { useEffect, useState } from "react";
import Home from "./Component/Home/Home";
import "./App.css"
import { Header } from './Component/Header';
import { BrowserRouter } from "react-router-dom";
import Footer from "./Component/Footer/Footer";


function App() {
  

  return (
    <BrowserRouter>
    <Header/>
<Home/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
