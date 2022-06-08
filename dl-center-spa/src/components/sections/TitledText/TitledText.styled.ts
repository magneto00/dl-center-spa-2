import styled from '@emotion/styled';
import { Html } from 'src/components/atoms';

export const Section = styled('section')(({ theme }) => ({
  padding: theme.spacing.standard,
  margin: `0 auto`,
  maxWidth: theme.containerWidth.small,
}));

export const Description = styled(Html)(({ theme }) => ({
  ul: {
    listStyle: 'circle inside',
  },
}));
