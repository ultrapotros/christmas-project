import { Facebook , Instagram , LinkedIn , Twitter } from '@mui/icons-material'
import React from "react";
import './component.css';


/**
 * Component for links from the same page, such as header links
 * @returns component react
 */
function MyTabs() {
  const routes = [{route:'/about-us', label: 'about-us'}, 
      {route:"/faq", label: "faq"},
      {route:"/privacy-policy", label: "privacy policy"}];

  return (
    <React.Fragment>
      <div id= "nav">
          {routes.map((element, index) => 
              /*we use pathname to assign id*/
              <div id={window.location.pathname === element.route ? 'active' : null}
                  key={`bottomnav${index}`} >
                  <a href= {element.route}>{element.label}</a>
              </div>)}
      </div>
    </React.Fragment>
  );
}


/**
 * Component social media links open another window
 * @returns component react
 */
function SocialMedia() {
    const routes = [{route:"https://www.facebook.com/", label: <Facebook/>},
        {route:"https://www.instagram.com/?hl=es", label: <Instagram/>},
        {route:"https://es.linkedin.com/", label: <LinkedIn/>}, 
        {route:"https://twitter.com/", label: <Twitter/>}];
      
  return (<React.Fragment>
        <div  id= "social"> 
            {routes.map((element, index) => 
                /*we use pathname to assign id*/
                <div id={window.location.pathname === element.route ? 'active' : null}
                    key={`social${index}`} >
                    <a href= {element.route}>{element.label}</a>
                </div>)}
        </div>
    </React.Fragment>);
}


/**
 * Footer component
 * @returns component react
 */
export default function Footer() {
  return (
      <div className="footerContainer">
          <MyTabs />
          <SocialMedia />
      </div>
  );
}

