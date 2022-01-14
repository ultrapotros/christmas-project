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

//these links open in the same page, as header links
function MyTabs() {
  const routes = [{route:'/about-us', label: 'about-us'}, {route:"/faq", label: "faq"},
   {route:"/privacy-policy", label: "privacy policy"}];
  return (
  <React.Fragment>
      <Tabs value={0}>
        <div  id= "nav">{/* id added to give our own style */}
          {routes.map((element, index) => <Tab label={element.label} key={`category${index}`} 
          value={element.route} to={element.route} component={Link} />)}
        </div>
      </Tabs> 
  </React.Fragment>
  );
}
//social media links open another window
function SocialMedia() {
  const routes = [{route:"https://www.facebook.com/", label: <FacebookIcon/>},
  {route:"https://www.instagram.com/?hl=es", label: <InstagramIcon/>}, {route:"https://es.linkedin.com/", label: <LinkedInIcon/>}, 
  {route:"https://twitter.com/", label: <TwitterIcon/>}];
  return (<React.Fragment>
      <Tabs value={0}>
        <div  id= "social"> {/* id added to give our own style */}
          {routes.map((element, index) => <a key={`category${index}`} href={element.route} target ='_blank' 
          component={Link}>{element.label}</a>)}
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

