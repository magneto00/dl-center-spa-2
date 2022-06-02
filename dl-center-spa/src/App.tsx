import { Global, ThemeProvider } from '@emotion/react';
import configGlobalStyles from 'src/styling/configGlobalStyles';
import configTheme from 'src/styling/configTheme';

import { Home } from './components/pages';

export function App() {
  return (
    <ThemeProvider theme={configTheme}>
      <Global styles={configGlobalStyles} />
      <Home />
    </ThemeProvider>
  );
}
