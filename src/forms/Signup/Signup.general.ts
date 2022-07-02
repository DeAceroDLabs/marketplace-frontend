import { Form } from "./../form.types";
export const generalSignupForm: Form = {
  formTitle: "Información General",
  formDescription: "Comienza tu registro añadiendo tus datos generales",
  fields: [
    {
      name: "name",
      label: "Nombre",
      required: true,
      placeholder: "Nombre",
      type: "text",
      value: "",
    },
    {
      name: "phone",
      label: "Teléfono",
      required: true,
      placeholder: "+52 (000)-1111-222",
      type: "tel",
      value: "",
    },
    {
      name: "email",
      label: "Correo electrónico",
      required: true,
      placeholder: "ejemplo@deacero.com",
      type: "email",
      value: "",
      validateDomain: true,
    },
    {
      name: "password",
      label: "Contraseña",
      required: true,
      placeholder: "Contraseña",
      type: "password",
      value: "",
    },
    {
      name: "password-confirm",
      label: "Confirmar contraseña",
      required: true,
      placeholder: "Contraseña",
      type: "password",
      value: "",
    },
  ],
};
