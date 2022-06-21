import { HTMLInputTypeAttribute } from 'react';

export type FormInputInterface = {
  id: string;
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
  autoComplete: string;
  autoFocus: boolean;
  defaultValue: string;
  disabled: boolean;
  placeholder: string;
  validation: {
    required: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
  };
};

export type FormSelectInterface = {
  id: string;
  label: string;
  name: string;
  type: string;
  autoComplete: string;
  autoFocus: boolean;
  defaultValue: string;
  disabled: boolean;
  multiple: boolean;
  size: number;
  options: string[];
  validation: {
    required: boolean;
  };
};

export type ConfigFormInterface = {
  formFields: Array<FormInputInterface | FormSelectInterface>;
  submitButton: { [index: string]: string };
};

export type InstructionInterface = {
  device: string;
  country: string;
  language: string;
  software: string;
  version: string;
  notes: string;
  link: string;
  uid: string;
};

export type FormOptionsInterface = {
  countries: string[];
  devices: string[];
};
