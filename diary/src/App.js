import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages /Login";

function App() {
  return (
    <Router>
      <div className="App mx-8">
        <h1> diary app </h1>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<App />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
