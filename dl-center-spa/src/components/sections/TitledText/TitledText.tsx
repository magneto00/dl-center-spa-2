import { Html } from 'src/components/atoms';
import * as S from './TitledText.styled';

type Props = {
  header: string;
  headerTag?: keyof React.ReactHTML;
  description: string;
};

export function TitledText({ header, description, headerTag }: Props) {
  return (
    <S.Section>
      <Html content={header} tag={headerTag} />
      <S.Description content={description} />
    </S.Section>
  );
}
