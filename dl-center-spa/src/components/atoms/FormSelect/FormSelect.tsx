import { useFormContext } from 'react-hook-form';
import { FormSelectInterface } from 'src/types';
import { FormFieldError } from '../FormFieldError/FormFieldError';
import * as S from './FormSelect.styled';

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
    <S.Wrapper>
      <label htmlFor={id}>{label}</label>
      <select {...registerInput} id={id} disabled={disabled}>
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      {error && <FormFieldError message={error.message} />}
    </S.Wrapper>
  );
}
