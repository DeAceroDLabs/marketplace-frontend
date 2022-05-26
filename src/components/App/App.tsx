import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "components/Home";
import Search from "components/Search";
import Header from "components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search/:query" element={<Search />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
