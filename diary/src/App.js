import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages /Login";
import SignUp from "./pages /SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <h1> diary app </h1>
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/" element={<App />} /> */}
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
