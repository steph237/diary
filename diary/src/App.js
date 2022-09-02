import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages /Login";
import SignUp from "./pages /SignUp";
import Entry from "./pages /Entry/Entry";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/" element={<App />} /> */}
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/entry" element={<Entry />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
