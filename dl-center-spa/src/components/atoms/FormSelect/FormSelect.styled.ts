import styled from '@emotion/styled';

export const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column nowrap',
  width: '100%',
  marginTop: '1.5rem',

  label: {
    margin: '0 0 1rem 0.2rem',
  },
}));
