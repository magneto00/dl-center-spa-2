import styled from '@emotion/styled';

export const Wrapper = styled('div')(() => ({
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '-1.5rem', // compensate first formField margin top
}));
