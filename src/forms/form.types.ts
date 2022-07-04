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
}

export interface OptionsField extends Field {
  options?: Option[];
  validateDomain?: string;
  message?: string;
}

export interface Form {
  formTitle: string;
  formDescription?: string;
  fields: Field[] | OptionsField[];
}

export type FieldProps = OptionsField;
