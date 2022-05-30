import {
  ConfigFormInterface,
  FormInputInterface,
  FormSelectInterface,
} from 'src/types';
import { FormInput, FormSelect } from 'src/components/atoms';

type Props = {
  formFields: ConfigFormInterface['formFields'];
};

export function FormFields({ formFields }: Props) {
  return (
    <div>
      {formFields.map((formField) => {
        switch (formField.type) {
          case 'email':
            return (
              <FormInput
                input={formField as FormInputInterface}
                key={formField.id}
              />
            );
          case 'select':
            return (
              <FormSelect
                input={formField as FormSelectInterface}
                key={formField.id}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
