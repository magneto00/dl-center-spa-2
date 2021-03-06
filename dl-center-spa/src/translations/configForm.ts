import { ConfigFormInterface, FormOptionsInterface } from 'src/types';

export default (formOptions: FormOptionsInterface) =>
  ({
    formFields: [
      {
        id: 'input-1',
        label: 'Country',
        name: 'country',
        type: 'select',
        autoComplete: 'country-name',
        autoFocus: false,
        defaultValue: '',
        disabled: false,
        multiple: false,
        size: 0,
        options: formOptions.countries,
        validation: {
          required: true,
        },
      },
      {
        id: 'input-2',
        label: 'Device',
        name: 'device',
        type: 'select',
        autoComplete: 'off',
        autoFocus: false,
        defaultValue: '',
        disabled: false,
        multiple: false,
        size: 0,
        options: formOptions.devices,
        validation: {
          required: true,
        },
      },
      {
        id: 'input-3',
        label: 'Email',
        name: 'email',
        type: 'email',
        autoComplete: 'email',
        autoFocus: false,
        defaultValue: '',
        disabled: false,
        placeholder: 'Enter your email',
        validation: {
          required: true,
          minLength: undefined,
          maxLength: undefined,
          // pattern matching Pardot specs
          // https://help.salesforce.com/s/articleView?language=en_US&type=5&id=sf.pardot_emails_allowed_characters.htm
          pattern:
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i,
        },
      },
    ],
    submitButton: {
      text: 'Submit',
    },
  } as ConfigFormInterface);
