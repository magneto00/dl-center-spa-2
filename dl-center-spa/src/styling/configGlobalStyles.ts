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
      outline: ` ${theme.colors.primary.main} auto 0.1rem`,
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
      color: theme.colors.black,
    },
    h1: {
      ...resetStyles.h1,
      fontSize: '3.5rem',
      fontWeight: 400,
      lineHeight: 1.2,
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
