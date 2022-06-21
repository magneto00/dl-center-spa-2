import styled from '@emotion/styled';

export const Section = styled('section')(({ theme }) => ({
  padding: `0 ${theme.spacing.standard}`,
}));

export const Wrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.colors.primary.light,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing.standard,
  maxWidth: `calc(${theme.containerWidth.small} - 2*${theme.spacing.standard})`,
  height: '44rem',
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
