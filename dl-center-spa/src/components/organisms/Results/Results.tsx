import { Button } from 'src/components/atoms';
import { IconDownloadFile } from 'src/components/atoms/icons';
import { InstructionInterface } from 'src/types';
import * as S from './Results.styled';

type Props = {
  handleGoBackBtnClick: () => void;
  data: InstructionInterface;
};

export function Results({ handleGoBackBtnClick, data }: Props) {
  const { device, country, language, version, link } = data;

  return (
    <S.Wrapper>
      <p>
        Here you can download requested file for {device} in {country}:
      </p>
      <div>
        <IconDownloadFile />
        <S.Description>
          <S.Title>{`IFU for ${device} (${language})`}</S.Title>
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
