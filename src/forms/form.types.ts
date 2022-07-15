import { Context } from "react";

export type Option = {
  label: string;
  value: string;
};

export interface Field {
  label: string;
  required: boolean;
  placeholder: string;
  type: string;
  value?: string;
  name: string;
  disabled?: boolean;
  size?: "small" | "medium" | "full-width";
}

export interface OptionsField extends Field {
  options?: Option[];
  dynamicOptionsProp?: string;
  optionsContext?: Context<any>;
  validateDomain?: string;
  errorMessage?: string;
  needsValidationFrom?: string;
}

export interface Form {
  formTitle: string;
  formDescription?: string;
  fields: Field[] | OptionsField[];
}

export type FieldProps = OptionsField;
