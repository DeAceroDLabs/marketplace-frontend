import { MEXICO_STATES } from "./../../utils/mexico";
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
    },
    {
      name: "suburb",
      label: "Colonia",
      required: true,
      placeholder: "Colonia",
      type: "text",
    },
    {
      name: "zipCode",
      label: "Código Postal",
      required: true,
      placeholder: "12345",
      type: "number",
    },
    {
      name: "town",
      label: "Municipio",
      required: true,
      placeholder: "Municipio",
      type: "text",
    },
    {
      name: "state",
      label: "Estado",
      required: true,
      placeholder: "Estado",
      type: "dropdown",

      options: MEXICO_STATES,
    },
  ],
};
