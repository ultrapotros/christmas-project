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
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import webLogo from './storeLogo.png';

function Router(props) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/single-category/:category">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={['/single-category/:category']} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node,
};

function useRouteMatch(patterns) {
  const { pathname } = useLocation();      
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
  const cartLogo = <ShoppingCartRoundedIcon /> ;
  const routes = [{route:'/', label: 'home'}, {route:"/single-category/men's%20clothing", label: "men's clothing"},
   {route:"/single-category/women's%20clothing", label: "women's clothing"}, {route:"/single-category/jewelery", label: 'jewelery'},
    {route:"/single-category/electronics", label: 'electronics'}, {route:'/about-us', label: 'about-us'}, 
    {route:'/cart', label: cartLogo}];
  
  const routeMatch = useRouteMatch(routes);
  const currentTab = routeMatch?.pattern?.path;
  return (<React.Fragment>
    <div className="topHeader">
      <img src={webLogo} alt='logo'/>
    </div>
    <Tabs value={currentTab} className="nav">
      {routes.map((element, index) => <Tab label={routes[index].label} key={`category${index}`} value={routes[index].route} to={routes[index].route} component={Link} />)}
    </Tabs>
  </React.Fragment>
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
