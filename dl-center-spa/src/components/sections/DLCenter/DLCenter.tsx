import { useState } from 'react';
import { Form, Results } from 'src/components/organisms';
import * as S from './DLCenter.styled';

export function DLCenter() {
  const [showResults, setShowResults] = useState(false);

  const handleToggleView = () => setShowResults((prevState) => !prevState);

  const fileData = {
    title: 'Instruction for use Titan',
    version: '1.3',
    language: 'EN',
    link: 'DownloadLink',
  };

  return (
    <S.Section>
      <S.Wrapper>
        {showResults ? (
          <Results data={fileData} handleGoBackBtnClick={handleToggleView} />
        ) : (
          <Form handleSubmitBtnClick={handleToggleView} />
        )}
      </S.Wrapper>
    </S.Section>
  );
}
