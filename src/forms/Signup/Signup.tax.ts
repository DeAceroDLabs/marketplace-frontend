import { MEXICO_STATES } from "./../../utils/mexico";
import { Form } from "./../form.types";
export const taxSignupForm: Form = {
  formTitle: "Información Fiscal",
  formDescription: "Registra los datos fiscales para facturación",
  fields: [
    {
      name: "taxIdentity",
      label: "Compañía / Nombre Legal",
      required: true,
      placeholder: "Nombre de empresa o identidad legal",
      type: "text",
      value: "",
    },
    {
      name: "taxZipCode",
      label: "Código Postal",
      required: true,
      placeholder: "000000",
      type: "number",
      value: "",
    },
    {
      name: "taxRegime",
      label: "Regimen Tributario",
      required: true,
      placeholder: "ejemplo@deacero.com",
      type: "text",
      value: "Sueldos y Salarios e Ingresos Asimilados a salarios",
      disabled: true,
    },
    {
      name: "taxState",
      label: "Estado",
      required: true,
      placeholder: "",
      type: "dropdown",
      value: "",
      options: MEXICO_STATES,
    },
    {
      name: "taxRfc",
      label: "RFC",
      required: true,
      placeholder: "AAAA000000BBB0C0",
      type: "text",
      value: "",
    },
    {
      name: "taxAdditionalEmail",
      label: "Email adicional a la cuenta CC",
      required: true,
      placeholder: "ejemplo@deacero.com",
      type: "email",
      value: "",
    },
  ],
};
