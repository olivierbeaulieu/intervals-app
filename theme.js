import { grommet, extendDefaultTheme } from 'grommet';
import { deepMerge } from 'grommet/utils';
import { base } from 'grommet/themes';

export const GROMMET_THEME = deepMerge(grommet, {
  global: {
    defaultMode: 'dark',
    font: {
      family: 'Source Sans Pro',
      size: '16px',
      height: '18px',
    },
    colors: {
      brand: {
        dark: 'hsl(42, 78%, 60%)',
        light: 'hsl(42, 78%, 60%)',
      },
      background: {
        light: '#FFFFFF',
        dark: 'hsl(0, 0%, 13%)',
      },
    },
    input: {
      weight: 'normal',
    },
  },
});
