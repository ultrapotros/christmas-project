import React, { useState , useContext } from 'react';
import './component.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Context } from '../../App';
import { CircularProgress, Skeleton, Box } from '@mui/material';


export default function HomePage() {
  const slides = useContext(Context); /* we get data from context */
  const [current, setCurrent] = useState(0);
  const length = slides.length - 1;
  console.log(slides);
  const nextSlide = () => { /* next arrow function */
    setCurrent(current === length ? 0 : current + 1);
  };
  const prevSlide = () => {/* previous arrow function */
    setCurrent(current === 0 ? length : current - 1);
  };
  let bottomIndex1 = current < 2 ? current + (length - 1): current - 2; /* here we assign values to bottom slider */
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
                    <a href= {`/single-product/${slide.id}`}> 
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {/* here we assigned the class active to the image to show */}
                            {index === current && (<img src={slide.image} alt={slide.description} className='image' />)}
                        </div>
                    </a>
                );
              })}        
          </div>
          <div className= 'bottom-line'> {/* bottom slider */}
              <div className= 'bottom-line-image'>
                  <img src={slides[bottomIndex1].image} alt={slides[bottomIndex1].description}/>
              </div>
              <div className= 'bottom-line-image'>
                  <img src={slides[bottomIndex2].image} alt={slides[bottomIndex2].description}/>
              </div>
              <div className= 'bottom-line-image main'>
                  <img src={slides[bottomIndex3].image} alt={slides[bottomIndex3].description}/>
              </div>
              <div className= 'bottom-line-image'>
                  <img src={slides[bottomIndex4].image} alt={slides[bottomIndex4].description}/>
              </div>
              <div className= 'bottom-line-image'>
                  <img src={slides[bottomIndex5].image} alt={slides[bottomIndex5].description}/>
              </div>
          </div>    
      </section>    
    </>
  );


  } 
else {
    // Structure while loading data
    return( <>
      <Box sx={{ width: 40 }}>
        <CircularProgress />
      
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
      </Box>
    </>);
  }
};






