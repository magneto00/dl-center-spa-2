import styled from '@emotion/styled';

export const StyledButton = styled('button')(({ theme }) => ({
  padding: '1.5rem 3.5rem',
  width: 'fit-content',
  backgroundColor: theme.colors.primary.main,
  color: theme.colors.white.main,
  fontSize: 'inherit',
  fontFamily: 'inherit',
  fontWeight: 700,
  border: 'none',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadow.main,
  cursor: 'pointer',
  transition: 'opacity 0.2s ease-in-out',

  '&:hover, &:focus': {
    opacity: 0.8,
  },
}));
