import styled from '@emotion/styled';

export const Form = styled('form')(({ theme }) => ({
  backgroundColor: theme.colors.primary.light,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing.paddingX,
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'space-between',
  maxWidth: theme.containerWidth.small,
  minWidth: '30rem',
  margin: 'auto',

  button: {
    marginTop: '4rem',
  },
}));
