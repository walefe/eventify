/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import { IS_DEVELOPMENT, IS_MSW_ENABLED } from './constants';
import AppProviders from './contexts';

if (IS_DEVELOPMENT && IS_MSW_ENABLED) {
  const { worker } = require('./mocks');
  worker.start();
}

ReactDOM.render(
  <StrictMode>
    <HelmetProvider>
      <AppProviders>
        <App />
      </AppProviders>
    </HelmetProvider>
  </StrictMode>,
  document.getElementById('root'),
);
