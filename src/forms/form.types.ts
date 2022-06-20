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
  disable?: boolean;
};

export interface OptionsField extends Field {
  options: Option[];
}

export type Form = {
  formTitle: string;
  formDescription?: string;
  fields: Field[];
};
