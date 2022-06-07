import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

type Props = Theme & {
  btnTheme: string;
};

const Core = styled('div')(({ theme, btnTheme }: Props) => {
  const common = {
    width: 'fit-content',
    fontSize: 'inherit',
    fontFamily: 'inherit',
    border: 'none',
    cursor: 'pointer',
    transition: `opacity ${theme.transition.quick}`,

    '&:hover, &:focus': {
      opacity: 0.8,
    },
  };

  switch (btnTheme) {
    case 'primary':
      return {
        ...common,
        padding: '1.5rem 3.5rem',
        fontWeight: theme.typography.fontWeight.bold,
        backgroundColor: theme.colors.primary.main,
        color: theme.colors.white.main,
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadow.main,
        textDecoration: 'none',
      };

    default:
      return {
        ...common,
        textDecoration: 'underline',
        color: theme.colors.black,
        backgroundColor: 'transparent',
      };
  }
});

export const Button = Core.withComponent('button');
export const Link = Core.withComponent('a');
