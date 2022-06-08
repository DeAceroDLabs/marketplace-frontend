import { Form } from "./form.types";

export const loginForm: Form = {
  form_label: "Login Form",
  fields: [
    {
      name: "login_username",
      label: "Username",
      required: true,
      placeholder: "Username",
      type: "text",
      value: "",
    },
    {
      name: "login_password",
      label: "Password",
      required: true,
      placeholder: "Password",
      type: "text",
      value: "",
    },
  ],
};
