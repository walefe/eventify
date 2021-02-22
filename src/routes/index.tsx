import { Switch } from 'react-router-dom';

import { SignIn, SignUp } from '@pages/Auth';
import Dashboard from '@pages/Dashboard';

import Route from './Route';

const Routes = () => (
  <Switch>
    <Route component={SignIn} path="/" exact />
    <Route component={SignUp} path="/sign-up" exact />

    <Route component={Dashboard} path="/dashboard" private />
  </Switch>
);

export default Routes;
