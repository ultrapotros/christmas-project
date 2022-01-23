import { Facebook , Instagram , LinkedIn , Twitter } from '@mui/icons-material'
import React from "react";
import './component.css';
//these links open in the same page, as header links
function MyTabs() {
  const routes = [{route:'/about-us', label: 'about-us'}, {route:"/faq", label: "faq"},
   {route:"/privacy-policy", label: "privacy policy"}];
  return (
  <React.Fragment>
      <div  id= "nav">
          {routes.map((element, index) => <a href= {element.route} key={`bottomnav${index}`}>{element.label}</a>)}
      </div>
  </React.Fragment>
  );
}
//social media links open another window
function SocialMedia() {
  const routes = [{route:"https://www.facebook.com/", label: <Facebook/>},
  {route:"https://www.instagram.com/?hl=es", label: <Instagram/>}, {route:"https://es.linkedin.com/", label: <LinkedIn/>}, 
  {route:"https://twitter.com/", label: <Twitter/>}];
  return (<React.Fragment>
      <div  id= "social"> 
          {routes.map((element, index) => <a href= {element.route} target='_blank' key={`social${index}`}>{element.label}</a>)}
      </div>
  </React.Fragment>
  );
}

export default function Footer() {
  return (
    <div className="footerContainer">
      <MyTabs />
      <SocialMedia />
    </div>
  );
}

