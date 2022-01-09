import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from "react";
import './component.css';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {  Link } from "react-router-dom";
function MyTabs() {
  const routes = [{route:'/about-us', label: 'about-us'}, {route:"/faq", label: "faq"},
   {route:"/privacy", label: "privacy policy"}];
  return (<React.Fragment>
      <Tabs value={0}>
        <div  id= "nav">
          {routes.map((element, index) => <Tab label={element.label} key={`category${index}`} value={element.route} to={element.route} component={Link} />)}
        </div>
      </Tabs> 
      
  </React.Fragment>
  );
}
function SocialMedia() {
  const routes = [{route:"/facebook", label: <FacebookIcon/>},
  {route:"/instagram", label: <InstagramIcon/>}, {route:"/linkedin", label: <LinkedInIcon/>}, {route:"/twitter", label: <TwitterIcon/>}];
  return (<React.Fragment>
      <Tabs value={0}>
        <div  id= "social">
          {routes.map((element, index) => <Tab label={element.label} key={`category${index}`} value={element.route} to={element.route} component={Link} />)}
        </div>
      </Tabs> 
      
  </React.Fragment>
  );
}



export default function Footer() {
  return (<div className="footerContainer">

    <Box sx={{ width: '100%' }}>
        <MyTabs />
    </Box>
    <Box sx={{ width: '100%' }}>
        <SocialMedia />
    </Box>

  </div>
  );
}

