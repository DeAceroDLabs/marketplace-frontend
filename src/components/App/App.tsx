import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "components/Home";
import Search from "components/Search";
import Header from "components/Header";
import Login from "components/Login";
import ProtectedRoute from "components/ProtectedRoute";
import { UserProvider } from "config/userContext";
import { useMemo, useState } from "react";

const App = () => {
  const [username, setUser] = useState("");
  const value = useMemo(() => ({ username, setUser }), [username]);

  return (
    <UserProvider value={value}>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/search/:query" element={<Search />}></Route>
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
