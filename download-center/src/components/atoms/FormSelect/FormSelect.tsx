import { useFormContext } from 'react-hook-form';
import { FormSelectInterface } from 'src/types';

type Props = {
  input: FormSelectInterface;
};

const configValidation = (validation: FormSelectInterface['validation']) => {
  const { required } = validation;

  return { required: { value: required, message: `This field is required` } };
};

export function FormSelect({ input }: Props) {
  const { disabled, id, label, name, options, validation } = input;

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const registerInput = register(`${name}` as const, {
    ...configValidation(validation),
  });
  const error = errors[name];

  return (
    <div>
      <label htmlFor={id}>
        {label}
        <select {...registerInput} id={id} disabled={disabled}>
          {options.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>
      {error && <div>{error.message}</div>}
    </div>
  );
}
