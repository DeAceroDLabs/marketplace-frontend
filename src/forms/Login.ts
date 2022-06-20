import { Form } from "./form.types";

export const loginForm: Form = {
  formTitle: "Ingresa a la plataforma",
  formDescription: "Ingresa tus datos para acceder a la plataforma",
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
