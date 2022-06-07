import styled from '@emotion/styled';

export const Section = styled('section')(({ theme }) => ({
  padding: theme.spacing.standard,

  '*': {
    boxSizing: 'border-box',
  },
}));

export const Wrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.colors.primary.light,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing.standard,
  maxWidth: theme.containerWidth.small,
  height: '44rem',
  margin: 'auto',

  '*': {
    boxSizing: 'border-box',
  },
}));
