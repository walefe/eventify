import { ReactNode } from 'react';

import { render } from '@testing-library/react';

import { AppThemeProvider } from '@contexts/theme';

export const renderWithTheme = (children: ReactNode) =>
  render(<AppThemeProvider>{children}</AppThemeProvider>);
