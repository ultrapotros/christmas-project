
import './component.css';
import React from 'react'
import GoogleMapReact from 'google-map-react';

import Map from './map'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function AboutUs() {
    const defaultProps = {
        center: {
          lat: 40.421779006268075,
          lng: -3.6926647309547094
        },
        zoom: 11
      };

    return (
        <div className='AboutUs'>
            <div className='AboutUsInfo'>
                <p>
                    Company dedicated to smuggling luxury goods of dubious origin since the Covic pandemic.
                </p>
                <a href="tel:+34000000000">Call us without obligation</a> {/* Aqui va el numero de santi */}
                <p>
                    You can find us if you have no debts or complaints at:
                </p>
            </div>
            <div className="map-container">
                <Map />
            </div>
        </div>
    )
}

