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
      errorMessage: "Por favor ingresa tu teléfono a 10 dígitos",
    },
    {
      name: "email",
      label: "Correo electrónico",
      required: true,
      placeholder: "ejemplo@deacero.com",
      type: "email",
      value: "",
      validateDomain: "deacero.com",
      errorMessage: "Por favor ingresa tu correo de DEACERO",
    },
    {
      name: "password",
      label: "Contraseña",
      required: true,
      placeholder: "Contraseña",
      type: "password",
      value: "",
      errorMessage: "Tu contraseña debe de contener al menos 8 caracteres, una minúscula, una mayúscula, un número y un caracter especial",
    },
    {
      name: "password-confirm",
      label: "Confirmar contraseña",
      required: true,
      placeholder: "Contraseña",
      type: "password",
      value: "",
      errorMessage: "La contraseña debe de coincidir con la que ingresaste previamente",
      needsValidateFrom: "password"
    },
  ],
};
