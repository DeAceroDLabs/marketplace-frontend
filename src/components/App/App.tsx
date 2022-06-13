import { useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "config/userContext";
import Home from "views/Home";
import Search from "views/Search";
import Login from "views/Login";
import PageNotFound from "views/PageNotFound";
import Header from "components/Header";
import Footer from "components/Footer";
import ProtectedRoute from "components/ProtectedRoute";

const App = () => {
  const [username, setUser] = useState("");
  const userValue = useMemo(() => ({ username, setUser }), [username]);

  return (
    <UserProvider value={userValue}>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/search/:query" element={<Search />}></Route>
            <Route path='*' element={<PageNotFound />}></Route>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
};

export default App;
