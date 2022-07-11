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
    },
    {
      name: "taxRfc",
      label: "RFC",
      required: true,
      placeholder: "AAAA000000BBB0C0",
      type: "rfc",
      errorMessage: "Por favor ingresa tu RFC completo con 13 caracteres",
    },
    {
      name: "taxCurp",
      label: "CURP",
      required: true,
      placeholder: "ABCD990022ABCDEF00",
      type: "curp",
      errorMessage: "Por favor ingresa una CURP válida",
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
      name: "taxDocument",
      label: "Constancia Fiscal",
      required: true,
      placeholder: "Sube tu constancia fiscal aquí",
      type: "file",
    },
    {
      name: "taxZipCode",
      label: "Código Postal",
      required: true,
      placeholder: "000000",
      type: "number",
    },
    {
      name: "taxState",
      label: "Estado",
      required: true,
      placeholder: "",
      type: "dropdown",
      options: MEXICO_STATES,
    },
    {
      name: "taxAdditionalEmail",
      label: "Email adicional a la cuenta CC",
      required: true,
      placeholder: "ejemplo@deacero.com",
      type: "email",
      errorMessage:
        "Por favor ingresa una dirección de correo personal/adicional",
    },
  ],
};
