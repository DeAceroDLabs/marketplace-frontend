import { Form } from "./../form.types";
export const locationSignupForm: Form = {
  formTitle: "Ubicación",
  formDescription:
    "Registra la ubicación en donde seran entregados tus productos",
  fields: [
    {
      name: "street",
      label: "Calle",
      required: true,
      placeholder: "Calle",
      type: "text",
      value: "",
    },
    {
      name: "suburb",
      label: "Colonia",
      required: true,
      placeholder: "Colonia",
      type: "text",
      value: "",
    },
    {
      name: "zipCode",
      label: "Código Postal",
      required: true,
      placeholder: "12345",
      type: "number",
      value: "",
    },
    {
      name: "email",
      label: "Correo electrónico",
      required: true,
      placeholder: "ejemplo@deacero.com",
      type: "email",
      value: "",
    },
    {
      name: "town",
      label: "Municipio",
      required: true,
      placeholder: "Municipio",
      type: "text",
      value: "",
    },
    {
      name: "state",
      label: "Estado",
      required: true,
      placeholder: "Estado",
      type: "dropdown",
      value: "",
    },
  ],
};
