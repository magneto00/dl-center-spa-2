import { ReactHTML } from 'react';
import { Html } from 'src/components/atoms';
import * as S from './Title.styled';

type Props = {
  content: string;
  tag?: keyof ReactHTML;
};

export function Title({ content, tag }: Props) {
  return (
    <S.Section>
      <Html content={content} tag={tag} />
    </S.Section>
  );
}
