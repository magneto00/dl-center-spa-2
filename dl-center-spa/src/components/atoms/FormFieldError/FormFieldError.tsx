import * as S from './FormFieldError.styled';

type Props = {
  message: string;
};

export function FormFieldError({ message }: Props) {
  return <S.Wrapper>{message}</S.Wrapper>;
}
