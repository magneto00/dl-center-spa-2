import { StyledButton } from './Button.styled';

type Props = {
  type: 'submit' | 'reset' | 'button';
  label: string;
};

export function Button({ type, label }: Props) {
  return <StyledButton type={type}>{label}</StyledButton>;
}
