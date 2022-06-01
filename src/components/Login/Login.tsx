import React, { useContext, useState } from "react";
import Section from "components/common/Section";
import View from "components/common/View";
import UserContext from "config/userContext";
import { Navigate, useNavigate } from "react-router-dom";

const Login: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { username, setUser } = useContext(UserContext);
  const [user, setUsername] = useState(username);
  const submitUser = () => {
    setUser(user);
    navigate(`../`);
  };
  if (username) {
    return <Navigate to={"/"} />;
  }
  return (
    <View>
      <Section title="Login">
        <form onSubmit={submitUser}>
          <input
            value={user}
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
          <input type="text" placeholder="password" />
          <button type="submit">Log In</button>
        </form>
      </Section>
    </View>
  );
};

export default Login;
