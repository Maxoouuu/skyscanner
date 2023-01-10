import React from "react";
import "./App.css";
import { Menu } from "./components/Menu";
import { Outlet } from "react-router-dom";


const App = () => (
  <div className="App">
    <Menu
      items={[
        { label: "Recherche de vols", to: "/" },
        { label: "Recherche d'aéroports", to: "/airports" },
      ]}
    />
    <Outlet />
  </div>
);

export default App;
