type Option = {
  label: string;
  value?: string | number;
};

export type Field = {
  label: string;
  required: boolean;
  placeholder: string;
  type: string;
  value: string;
  name: string;
};

export interface OptionsField extends Field {
  options: Option[];
}

export type Form = {
  form_label: string;
  fields: Field[];
};
