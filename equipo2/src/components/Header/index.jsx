import './component.css';
import React, { useState } from "react";
import { ShoppingCartRounded , MenuRounded, CloseRounded } from '@mui/icons-material';
import webLogo from './storeLogo.png';

export default function Header() { 
  const routes = [{route:'/', label: 'home'}, {route:"/single-category/men's%20clothing", label: "men's clothing"},
   {route:"/single-category/women's%20clothing", label: "women's clothing"}, {route:"/single-category/jewelery", label: 'jewelery'},
    {route:"/single-category/electronics", label: 'electronics'}, {route:'/about-us', label: 'about-us'}, 
    {route:'/cart', label: <ShoppingCartRounded />}];
  const [showMobileMenu, setShowMobileMenu] = useState(false); /* we assign false as first value */

  return (
    <div className="header">
      <div className="topHeader">
        <img src={webLogo} alt='logo'/>
        <div className = 'mobileIcon' onClick={() => setShowMobileMenu(!showMobileMenu)}> {/* onclick we change the value of showMobileMenu */}
            {showMobileMenu ? <CloseRounded /> : <MenuRounded />} {/* we use showMobileMenu to choose the icon to show */}
        </div>
      </div> 
      <div id= "headerNav" className={showMobileMenu ? 'showed' : null} > {/*we use showMobileMenu to assign a class to show lateral menu */}
            {routes.map((element, index) => <a href= {element.route} key={`category${index}`} 
            id={window.location.pathname === element.route ? 'active' : null}/*  we use pathname to assign active class  */>
              {element.label}</a>)}
      </div> 
    </div> 
  );
}

