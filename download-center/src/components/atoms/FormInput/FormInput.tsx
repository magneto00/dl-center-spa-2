import { useFormContext } from 'react-hook-form';
import { FormInputInterface } from 'src/types';

type Props = {
  input: FormInputInterface;
};

const configValidation = (validation: FormInputInterface['validation']) => {
  const { required, minLength, maxLength, pattern } = validation;

  return {
    required: { value: required, message: `This field is required` },
    minLength: minLength && {
      value: minLength,
      message: `The value needs to be longer than ${minLength} letters.`,
    },
    maxLength: maxLength && {
      value: maxLength,
      message: `The value needs to be shorter than ${maxLength} letters.`,
    },
    pattern: pattern && {
      value: pattern,
      message: `The value needs to match this pattern: ${pattern}`,
    },
  };
};

export function FormInput({ input }: Props) {
  const { disabled, id, label, name, placeholder, type, validation } = input;

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
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          disabled={disabled}
          {...registerInput}
        />
      </label>
      {error && <div>{error.message}</div>}
    </div>
  );
}
