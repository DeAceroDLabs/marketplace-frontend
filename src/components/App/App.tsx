import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "components/Home";
import Search from "components/Search";
import ProductsNotFound from "components/ProductsNotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search/>}></Route>
        <Route path="/productsnotfound" element={<ProductsNotFound/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
