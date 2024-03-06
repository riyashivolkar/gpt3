import React from "react";
import "./App.css";
import { article, Brand, Cta } from "./components";
import {
  Header,
  Footer,
  WhatGPT3,
  possibility,
  Blog,
  Features,
} from "./containers";
import Navbar from "./components/navbar/Navbar";
import Possiblility from "./containers/possibility/Possiblility";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possiblility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
