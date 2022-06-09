import { Form } from "./form.types";

export const loginForm: Form = {
  form_label: "Login Form",
  fields: [
    {
      name: "username",
      label: "Usuario",
      required: true,
      placeholder: "Usuario",
      type: "text",
      value: "",
    },
    {
      name: "password",
      label: "Contraseña",
      required: true,
      placeholder: "Contraseña",
      type: "password",
      value: "",
    },
  ],
};
