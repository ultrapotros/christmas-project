
import './component.css';
import React from 'react'

/**
   * Component to show basic information of the company and location.
   * @returns component react
   */
export default function AboutUs() {

    const mapSrc = "https://maps.google.com/maps?q=40.421779006268075,-3.6926647309547094&t=&z=17&ie=UTF8&iwloc=&output=embed";

    return (
        <div className='AboutUs' style={{margin:'auto'}}>
            <div className='AboutUsInfo'>
                <p style={{color:'#23394d', fontSize:'large'}}>
                    Company dedicated to smuggling luxury goods of dubious 
                    origin since the Covic pandemic.
                </p>
                <a href="tel:+34000000000" style={{textAlign:'center', textDecoration: 'none',
                    color:'#ebb032', fontSize:'large'}}>
                    Call us without obligation
                </a> 
                <p style={{color:'#23394d', fontSize:'large'}}>
                    You can find us if you have no debts or complaints at:
                </p>
            </div>
            <div className="gmap_canvas" style={{margin:'auto'}}>
                <iframe title='gmap' 
                    id="gmap_canvas" 
                    src={mapSrc}
                    frameBorder="0" 
                    scrolling="no" >
                </iframe>
            </div>
        </div>
    )
}

