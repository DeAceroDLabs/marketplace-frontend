import { useMemo, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { UserProvider } from "config/userContext";
import Home from "views/Home";
import Search from "views/Search";
import Login from "views/Login";
import Signup from "views/Signup";
import PageNotFound from "views/PageNotFound";
import FrequentQuestions from "views/FrequentQuestions";
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
          <Route path="/signup" element={<Signup />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/search/:query" element={<Search />}></Route>
            <Route path="/ayuda" element={<FrequentQuestions />}></Route>
            <Route path="/404" element={<PageNotFound />}></Route>
            <Route path="*" element={<Navigate to="/404" />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
};

export default App;
