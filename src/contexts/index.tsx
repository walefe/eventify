import { QueryClientProvider } from 'react-query';

import { queryClient } from '@services';
import { PropsWithRequiredChildren } from '@common/types';

import { AppThemeProvider } from './theme';
import { AuthProvider } from './auth';

const AppProviders = ({ children }: PropsWithRequiredChildren) => (
  <QueryClientProvider client={queryClient}>
    <AppThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </AppThemeProvider>
  </QueryClientProvider>
);

export default AppProviders;
