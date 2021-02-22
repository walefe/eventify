import { Router } from 'react-router';
import { Toaster } from 'react-hot-toast';
import { useTheme } from 'styled-components';

import { history } from '@services';
import { generateToastOptions } from '@utils';

import Routes from './routes';

const App = () => {
  const theme = useTheme();

  return (
    <Router history={history}>
      <Routes />
      <Toaster
        position="top-right"
        toastOptions={generateToastOptions(theme)}
      />
    </Router>
  );
};

export default App;
