import { Button, Link } from 'src/components/atoms';
import { FileInterface } from 'src/types';
import * as S from './Results.styled';

type Props = {
  handleGoBackBtnClick: () => void;
  data: FileInterface;
};

export function Results({ handleGoBackBtnClick, data }: Props) {
  const { link, title, language, version } = data;

  return (
    <S.Wrapper>
      <p>Here you can download requested file:</p>
      <div>
        <Link href={link} openInNewTab>
          <S.Icon />
        </Link>
        <S.Description>
          <S.Title>{`${title} (${language})`}</S.Title>
          <span>software version: {version}</span>
        </S.Description>
        <S.DownloadButton
          btnTheme="primary"
          label="Download"
          href={link}
          openInNewTab
        />
      </div>
      <Button
        type="button"
        btnTheme="default"
        handleClick={handleGoBackBtnClick}
        label="Search for another document"
      />
    </S.Wrapper>
  );
}
