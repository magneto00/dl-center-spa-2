import styled from '@emotion/styled';

export const Section = styled('section')(({ theme }) => ({
  padding: `0 ${theme.spacing.paddingX}`,

  '*': {
    boxSizing: 'border-box',
  },
}));
