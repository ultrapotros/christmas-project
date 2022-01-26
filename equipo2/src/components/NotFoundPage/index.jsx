import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from './404.webp';
import './component.css';

/**
   * Component to show in case of not finding the endpoint
   * @returns component react
   */
 class NotFoundPage extends React.Component{
  render(){
      return <div className='NotFoundPage'>
          <img src={PageNotFound} alt='NotFoundPage'/>
          <p>
            <Link to="/"> Go to Home </Link>
          </p>
        </div>;
  }
}

export default NotFoundPage;