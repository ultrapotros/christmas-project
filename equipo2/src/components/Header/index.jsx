import './component.css';
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import {
  MemoryRouter,
  Route,
  Routes,
  Link,
  matchPath,
  useLocation,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

function Router(props) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/cart">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={['/cart']} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node,
};

function useRouteMatch(patterns) {
  const { pathname } = useLocation();
  console.log(pathname);
  console.log(patterns);          
  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i].route;
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

function MyTabs() {
  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const routes = [{route:'/', label: 'inicio'}, {route:'/cart', label: 'cart'}, {route:'/about-us', label: 'about-us'}];
  const routeMatch = useRouteMatch(routes);
  const currentTab = routeMatch?.pattern?.path;
  console.log(currentTab);

  return (
    <Tabs value={currentTab}>
      <Tab label="Inbox" value="/" to="/" component={Link} />
      <Tab label={routes[1].label} value={routes[1].route} to={routes[1].route} component={Link} /> {/* el label es el titulo de la etiqueta y el to lo que se muestra en el CurrentRoute */}
      <Tab label="about-us" value="/about-us" to="/about-us" component={Link} /> {/* para que ponga el subrayado tienen que coincidir el value y el to  */}
    </Tabs>
  );
}

function CurrentRoute() {
  const location = useLocation();

  return (
    <Typography variant="body2" sx={{ pb: 2 }} color="text.secondary">
      Current route: {location.pathname} {/* este es el título */}
    </Typography>
  );
}

export default function TabsRouter() {
  return (

      <Box sx={{ width: '100%' }}>
        <Routes>
          <Route path="*" element={<CurrentRoute />} />
        </Routes>
        <MyTabs />
      </Box>

  );
}
