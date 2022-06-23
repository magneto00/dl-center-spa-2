import { Button } from 'src/components/atoms';
import * as S from './ErrorMsg.styled';

type Props = {
  message: string;
};

export function ErrorMsg({ message }: Props) {
  const handleBtnClick = () => window.location.reload();

  return (
    <S.Wrapper>
      <S.Text>
        <p>{message}</p>
        <p>Please refresh the page to try again</p>
      </S.Text>
      <Button
        type="button"
        btnTheme="primary"
        handleClick={handleBtnClick}
        label="Try again"
      />
    </S.Wrapper>
  );
}
