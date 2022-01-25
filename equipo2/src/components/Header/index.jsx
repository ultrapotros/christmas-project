
import React, { useState } from "react";
import { ShoppingCartRounded , MenuRounded, CloseRounded } from '@mui/icons-material';

import './component.css';
import webLogo from './logoFondoAzulRecortado.png';


/**
 * Header component
 * @returns component react
 */
export default function Header() { 
    const routes = [{route:'/', label: 'home'}, 
        {route:"/single-category/men's%20clothing", label: "men's clothing"},
        {route:"/single-category/women's%20clothing", label: "women's clothing"},
        {route:"/single-category/jewelery", label: 'jewelery'},
        {route:"/single-category/electronics", label: 'electronics'}, 
        {route:'/about-us', label: 'about-us'}, 
        {route:'/cart', label: <ShoppingCartRounded />}];

    const [showMobileMenu, setShowMobileMenu] = useState(false); /* we assign false as first value */

  return (
      <div className="header">
          <div className="topHeader">
              <img src={webLogo} alt='logo'/>
              {/* onclick we change the value of showMobileMenu */}
              <div className = 'mobileIcon' onClick={() => setShowMobileMenu(!showMobileMenu)}> 
                  {/* we use showMobileMenu to choose the icon to show */}
                  {showMobileMenu ? <CloseRounded /> : <MenuRounded />} 
              </div>
          </div> 
          {/*we use showMobileMenu to assign a class to show lateral menu */}
          <div id="headerNav" className={showMobileMenu ? 'showed' : null} > 
              {routes.map((element, index) => 
                  /*we use pathname to assign id*/
                  <div id={window.location.pathname === element.route ? 'active' : null}
                      key={`category${index}`} >
                      <a href= {element.route}>{element.label}</a>
                  </div>
              )}
          </div> 
      </div> 
  );
}

