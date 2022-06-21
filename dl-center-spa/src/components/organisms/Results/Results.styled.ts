import styled from '@emotion/styled';
import { Button } from 'src/components/atoms';

export const Wrapper = styled('div')(() => ({
  height: '100%',
  textAlign: 'center',
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const Description = styled('div')(() => ({
  margin: '2rem auto',
}));

export const Title = styled('span')(({ theme }) => ({
  fontWeight: theme.typography.fontWeight.bold,
  display: 'block',
}));

export const DownloadButton = styled(Button)(() => ({
  display: 'block',
  margin: 'auto',
}));
