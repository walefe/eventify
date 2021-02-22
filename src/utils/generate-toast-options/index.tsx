import { ComponentProps } from 'react';

import { DefaultTheme as Theme } from 'styled-components';

type Toaster = typeof import('react-hot-toast').Toaster;
type ToastOptions = ComponentProps<Toaster>['toastOptions'];

export const generateToastOptions = ({ colors }: Theme): ToastOptions => ({
  success: {
    iconTheme: {
      primary: colors.success[100],
      secondary: colors.light[100],
    },
  },
  error: {
    iconTheme: {
      primary: colors.error[100],
      secondary: colors.light[100],
    },
  },
});
