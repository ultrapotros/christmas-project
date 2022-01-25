import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from './404.webp';

/**
   * Component to show in case of not finding the endpoint
   * @returns component react
   */
 class NotFoundPage extends React.Component{
  render(){
      return <div>
          <img src={PageNotFound} alt='NotFoundPage' className='NotFoundPage'
            style={{objectFit:'contain', width:'80%', margin:'auto', display:'block'}}/>
          <p style={{textAlign:'center'}}>
            <Link to="/" style={{color:'#ebb032', fontSize:'x-large'}}> Go to Home </Link>
          </p>
        </div>;
  }
}

export default NotFoundPage;