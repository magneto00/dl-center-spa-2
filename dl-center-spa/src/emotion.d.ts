/* eslint-disable @typescript-eslint/no-empty-interface */
import '@emotion/react';

// Theme can be typed here if needed
declare module '@emotion/react' {
  export interface Theme extends Record<string, any> {}
}
