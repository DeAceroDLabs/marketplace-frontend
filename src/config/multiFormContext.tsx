import { Form } from "forms/form.types";
import React from "react";

const defaultForm = {
  forms: [] as Form[],
  activeForm: {} as Form,
  setActiveForm: (form: Form) => {},
};

const MultiFormContext = React.createContext(defaultForm);

export const MultiFormProvider = MultiFormContext.Provider;

export default MultiFormContext;
