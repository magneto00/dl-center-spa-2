import { useFormContext } from 'react-hook-form';
import { FormInputInterface } from 'src/types';
import { FormFieldError } from '../FormFieldError/FormFieldError';
import * as S from './FormInput.styled';

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
  const {
    disabled,
    id,
    label,
    name,
    placeholder,
    type,
    validation,
    autoComplete,
  } = input;

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
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete={autoComplete}
        {...registerInput}
      />
      {error && <FormFieldError message={error.message} />}
    </S.Wrapper>
  );
}
