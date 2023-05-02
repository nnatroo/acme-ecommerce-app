import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./modules/App.module.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Item from "./pages/Item";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/search" element={<Search />} />
        <Route path="/product/:id" element={<Item />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
