import { Theme } from '@emotion/react';
import resetStyles from './resetStyles';

export default (theme: Theme) => {
  const formField = {
    color: theme.colors.black,
    fontSize: theme.typography.fontSize,
    border: 'none',
    borderRadius: theme.shape.borderRadius,
    padding: '1.3rem 1.6rem',
    minWidth: '20rem',

    '&:focus, &:focus-visible, &:active': {
      outline: `${theme.colors.primary.main} auto 0.1rem`,
    },
  };

  return {
    ...resetStyles,
    ':root': {
      fontSize: theme.typography.baseFontSize,
    },
    body: {
      ...resetStyles.body,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize,
      lineHeight: 1.4,
      color: theme.colors.black,
    },
    h1: {
      ...resetStyles.h1,
      fontSize: '3.5rem',
      fontWeight: theme.typography.fontWeight.regular,
      lineHeight: 1.2,
      margin: '2rem 0 2rem',
    },
    h2: {
      ...resetStyles.h2,
      fontSize: '3rem',
      fontWeight: theme.typography.fontWeight.regular,
      lineHeight: 1.2,
      margin: '2rem 0 1.5rem',
    },
    p: {
      ...resetStyles.p,
      marginBottom: '1rem',
    },
    a: {
      ...resetStyles.a,
      color: 'inherit',
      textDecoration: 'none',
      '&:hover, &:focus': {
        color: theme.colors.primary.main,
      },
    },
    input: {
      ...formField,
    },
    select: {
      ...formField,
      cursor: 'pointer',
    },
  };
};
