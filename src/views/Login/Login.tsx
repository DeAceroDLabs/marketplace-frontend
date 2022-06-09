import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FieldValues } from "react-hook-form";
import UserContext from "config/userContext";
import { loginForm } from "forms/Login";
import Section from "components/common/Section";
import View from "components/common/View";
import Form from "components/Form";
import BgSection from "components/common/BgSection";
import styles from "./Login.module.scss";

const Login: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { username, setUser } = useContext(UserContext);

  const onSubmit = (data: FieldValues) => {
    const username = data["username"];
    setUser(username);
    navigate(`../`);
  };

  useEffect(() => {
    if (username) {
      navigate(`../`);
    }
  }, [username, navigate]);

  const loginTitle = (
    <div className={styles.title}>Ingresa a la Plataforma</div>
  );

  return (
    <View>
      <Section title={loginTitle}>
        <p className={styles.text}>
          Ingresa tus datos para acceder a la plataforma
        </p>
        <div className={styles["form-container"]}>
          <Form
            inputForm={loginForm}
            onSubmit={onSubmit}
            submitTitle={"Ingresar"}
          />
        </div>
      </Section>
      <BgSection color="primary" orientation="vertical" position="right" />
    </View>
  );
};

export default Login;
