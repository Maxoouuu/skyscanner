import React from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/page2" element={<h1>Page 2</h1>} />
        <Route path="/page3" element={<h1>Page 3</h1>} />
        <Route path="/page4" element={<h1>Page 4</h1>} />
      </Routes>
    </>
  );
}

export default App;
