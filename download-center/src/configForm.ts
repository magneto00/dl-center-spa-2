import { ConfigFormInterface } from './types';

export default {
  formFields: [
    {
      id: 'input-3',
      label: 'Email',
      name: 'Email-input-3',
      type: 'email',
      autoComplete: 'email',
      autoFocus: false,
      defaultValue: '',
      disabled: false,
      placeholder: 'Placeholder text',
      validation: {
        required: true,
        minLength: undefined,
        maxLength: undefined,
        pattern: undefined,
      },
    },
    {
      id: 'input-1',
      label: 'Country',
      name: 'Country-input-1',
      type: 'select',
      autoComplete: 'country-name',
      autoFocus: false,
      defaultValue: '',
      disabled: false,
      multiple: false,
      size: 0,
      options: ['Denmark', 'Pooland', 'California', 'Neverland'],
      validation: {
        required: true,
      },
    },
    {
      id: 'input-2',
      label: 'Device',
      name: 'Device-input-2',
      type: 'select',
      autoComplete: 'off',
      autoFocus: false,
      defaultValue: '',
      disabled: false,
      multiple: false,
      size: 0,
      options: ['Affinity', 'Titan', 'Lyra', 'Sera'],
      validation: {
        required: true,
      },
    },
  ],
  submitButton: {
    text: 'Submit',
  },
} as ConfigFormInterface;
