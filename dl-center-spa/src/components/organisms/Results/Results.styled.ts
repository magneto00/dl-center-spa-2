import styled from '@emotion/styled';
import { DownloadFileIcon, Button } from 'src/components/atoms';

export const Wrapper = styled('div')(({ theme }) => ({
  height: '100%',
  textAlign: 'center',
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const Icon = styled(DownloadFileIcon)(({ theme }) => ({
  color: theme.colors.black,

  '#arrow': {
    transition: `transform ${theme.transition.quick}`,
  },

  '&:hover, &:focus': {
    '#arrow': {
      transform: 'translateY(1rem)',
    },
  },
}));

export const Description = styled('div')(({ theme }) => ({
  margin: '2rem auto',
}));

export const Title = styled('span')(({ theme }) => ({
  fontWeight: theme.typography.fontWeight.bold,
  display: 'block',
}));

export const DownloadButton = styled(Button)(({ theme }) => ({
  display: 'block',
  margin: 'auto',
}));
