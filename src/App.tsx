import { useEffect, useState } from "react";
import './App.css';
import Mywatch from "./components/Mywatch";
import StartStopWatch from "./components/StartStopWatch";
import ThreeLoop from "./components/ThreeLoop";
import Home from "./components/Home";
import Header from "./components/Header";

export default function App() {
  

  return (
    <div className="App">
       <Header />
       <Home />
      {/* <ThreeLoop /> */}
      {/* <Mywatch /> */}
      {/* <StartStopWatch /> */}
    </div>
  );
}
