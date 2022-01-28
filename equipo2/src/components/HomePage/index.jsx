import React, { useState , useContext } from 'react';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { CircularProgress, Skeleton, Box } from '@mui/material';

import { Context } from '../../App';
import './component.css';


/**
 * Main component with a carousel of the best rated products.
 * @returns component react
 */
export default function HomePage() {
    /* we get data from context */
    /* Array [Object {id: number, tittle: string, price: number, description: string,
                  image: string(url), rating: {rate: number, rating: number} }] */
    const slides = useContext(Context); 

    const [current, setCurrent] = useState(0);
    const length = slides.length - 1;

    const nextSlide = () => { /* next arrow function */
      setCurrent(current === length ? 0 : current + 1);
    };

    const prevSlide = () => {/* previous arrow function */
      setCurrent(current === 0 ? length : current - 1);
    };

    /* here we assign values to bottom slider */
    let bottomIndex1 = current < 2 ? current + (length - 1): current - 2; 
    let bottomIndex2 = current < 1 ? current + length: current - 1;;
    let bottomIndex3 = current;
    let bottomIndex4 = current > length - 1 ? 0 : current + 1;;
    let bottomIndex5 = current > length - 2 ? current - (length - 1): current + 2;;

    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }
    if (slides.length !== 0) {
        // We make sure that data are loaded
        return (
            <>
              <ArrowBackIosIcon className='left-arrow' onClick={prevSlide} />
              <ArrowForwardIosIcon className='right-arrow' onClick={nextSlide} />    
              <section className='slider'>
                  <div className= 'main-image'>
                      {slides.map((slide, index) => {
                          return (
                              <a key={index} href={`/single-product/${slide.id}`}> 
                                  <div className={index === current ? 'slide active' : 'slide'} >
                                      {/* here we assigned the class active to the image to show */}
                                      {index === current && (<img src={slide.image} 
                                      alt={slide.description} className='image' />)}
                                  </div>
                              </a>
                          );
                      })}        
                  </div>
                  <div className= 'bottom-line'> {/* bottom slider */}
                      <div className= 'bottom-line-image'>
                          <img src={slides[bottomIndex1].image} 
                              alt={slides[bottomIndex1].description}/>
                      </div>
                      <div className= 'bottom-line-image'>
                          <img src={slides[bottomIndex2].image} 
                              alt={slides[bottomIndex2].description}/>
                      </div>
                      <div className= 'bottom-line-image main'>
                          <img src={slides[bottomIndex3].image} 
                              alt={slides[bottomIndex3].description}/>
                      </div>
                      <div className= 'bottom-line-image'>
                          <img src={slides[bottomIndex4].image} 
                              alt={slides[bottomIndex4].description}/>
                      </div>
                      <div className= 'bottom-line-image'>
                          <img src={slides[bottomIndex5].image} 
                              alt={slides[bottomIndex5].description}/>
                      </div>
                  </div>    
              </section>    
            </>
        );
    } else {
        // Structure while loading data
        return( <>
             <Box sx={{ width:"50px",
          margin: "150px auto"}}>
          <CircularProgress />
        </Box>
        </>);
    }
};






