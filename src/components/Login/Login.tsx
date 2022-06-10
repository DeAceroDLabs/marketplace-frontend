import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Section from "components/common/Section";
import View from "components/common/View";
import UserContext from "config/userContext";

const Login: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { username, setUser } = useContext(UserContext);
  const [user, setUsername] = useState(username);

  const submitUser = () => {
    setUser(user);
    navigate(`../`);
  };

  useEffect(() => {
    if (username) {
      navigate(`../`);
    }
  }, [username, navigate]);

  return (
    <View>
      <Section title="Login" variant="margin-title">
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
