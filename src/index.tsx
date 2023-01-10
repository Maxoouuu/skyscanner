import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import AirportSearchForm from "./form/AirportSearchForm";
import FlightSearchForm from "./form/FlightSearchForm";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<FlightSearchForm />} />
          <Route path="/airports" element={<AirportSearchForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
