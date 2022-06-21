import styled from '@emotion/styled';

export const Wrapper = styled('div')(() => ({
  display: 'flex',
  flexFlow: 'column nowrap',
  width: '100%',
  marginTop: '1.5rem',

  label: {
    margin: '0 0 0.6rem 0.2rem',
  },
}));
