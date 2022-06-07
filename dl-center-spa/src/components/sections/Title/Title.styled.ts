import styled from '@emotion/styled';

export const Section = styled('section')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing.standard,
  marginTop: theme.spacing.standard,

  '*': {
    boxSizing: 'border-box',
  },
}));
