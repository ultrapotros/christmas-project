import './component.css';
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {
  MemoryRouter,
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
   {route:"/single-category/women's%20clothing", label: "women's clothing"}, {route:"/single-category/jewerely", label: 'jewerely'},
    {route:"/single-category/electronic", label: 'electronic'}, {route:'/about-us', label: 'about-us'}, 
    {route:'/cart', label: cartLogo}];
  const routeMatch = useRouteMatch(routes);
  const currentTab = routeMatch?.pattern?.path;
  return (<React.Fragment>
    <div className="topHeader">
      <img src={webLogo} alt='logo'/>
    </div> 
      <Tabs value={currentTab}>
        <div  id= "nav">
          {routes.map((element, index) => <Tab label={element.label} key={`category${index}`} value={element.route} to={element.route} component={Link} />)}
        </div>
      </Tabs> 
      
  </React.Fragment>
  );
}


export default function Header() {
  return (

      <Box sx={{ width: '100%' }}>
        <Routes>
        </Routes>
        <MyTabs />
      </Box>

  );
}
