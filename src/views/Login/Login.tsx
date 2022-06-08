import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "config/userContext";
import Section from "components/common/Section";
import View from "components/common/View";
import Field from "components/Form/Field";
import { Form } from "forms/form.types";
import { loginForm } from "forms/Login";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

const Login: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const form = useForm();
  const { username, setUser } = useContext(UserContext);
  const [elements, setElements] = useState({} as Form);
  const { fields } = elements ?? {};

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const username = data["login_username"];
    setUser(username);
    navigate(`../`);
  };

  useEffect(() => {
    if (username) {
      navigate(`../`);
    }
  }, [username, navigate]);

  useEffect(() => {
    setElements(loginForm);
  }, []);

  const formFields = fields
    ? fields.map((field) => <Field {...field} key={field.name}></Field>)
    : null;

  return (
    <View>
      <Section title="Login">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div>{formFields}</div>
            <button type="submit">Log In</button>
          </form>
        </FormProvider>
      </Section>
    </View>
  );
};

export default Login;
