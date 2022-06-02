import styled from '@emotion/styled';

export const Section = styled('section')(({ theme }) => ({
  textAlign: 'center',
  padding: `${theme.spacing.paddingY} ${theme.spacing.paddingX}`,

  '*': {
    boxSizing: 'border-box',
  },
}));
