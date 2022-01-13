import './component.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import webLogo from './storeLogo.png';

function MyTabs() {
  const routes = [{route:'/', label: 'home'}, {route:"/single-category/men's%20clothing", label: "men's clothing"},
  {route:"/single-category/women's%20clothing", label: "women's clothing"}, {route:"/single-category/jewerely", label: 'jewerely'},
  {route:"/single-category/electronic", label: 'electronic'}, {route:'/about-us', label: 'about-us'}, 
  {route:'/cart', label: <ShoppingCartRoundedIcon />}];
  return (<React.Fragment>
    <div className="topHeader">
      <img src={webLogo} alt='logo'/>
    </div> 
      <Tabs value={0}>
        <div  id= "headerNav">
          {routes.map((element, index) => <Tab label={element.label} key={`category${index}`} value={element.route} to={element.route} component={Link} />)}
        </div>
      </Tabs> 
  </React.Fragment>
  );
}
export default function Header() {
  return (
      <Box sx={{ width: '100%' }}>
        <MyTabs />
      </Box>
  );
}