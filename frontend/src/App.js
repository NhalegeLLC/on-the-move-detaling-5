import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LuxuryCarDetailing from "./components/LuxuryCarDetailing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LuxuryCarDetailing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;