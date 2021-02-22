import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';

import { useAuth } from '@hooks';
import { AuthLayout, PrivateLayout } from '@pages/_layouts';

type RouteProps = import('react-router-dom').RouteProps & {
  private?: boolean;
  component: import('react').ComponentType;
};

const Route = (props: RouteProps) => {
  const { user } = useAuth();

  const { private: isPrivate = false, component: Component, ...rest } = props;
  const Layout = isPrivate ? PrivateLayout : AuthLayout;

  return (
    <ReactDOMRoute
      {...rest}
      render={(routeProps) => {
        if (isPrivate !== !!user) {
          return (
            <Redirect
              to={{
                pathname: isPrivate ? '/' : '/dashboard',
                state: { from: routeProps.location },
              }}
            />
          );
        }

        return (
          <Layout>
            <Component {...routeProps} />
          </Layout>
        );
      }}
    />
  );
};

Route.defaultProps = {
  private: false,
};

export default Route;
