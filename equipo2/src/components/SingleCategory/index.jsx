
import './component.css';
import { Context } from "../../App.js";
import React , { useState , useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Rating from '@mui/material/Rating';
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { CircularProgress, Skeleton, Box } from '@mui/material';

/**
 * Component for loading all products of a category
 * @returns component react
 */
export default function SingleCategory() {
  //we recover the products
  /* Array [Object {id: number, tittle: string, price: number, description: string,
                  image: string(url), rating: {rate: number, rating: number} }] */
  const itemData = useContext(Context);

  // we retrieve the category that we have to load. STRING.
  const { cat } = useParams();

  const [categoryItems, setCategoryItems] = useState([]);
  const [orderBy, setOrderBy] = useState();

  useEffect(() => {}, [orderBy]);

  useEffect(() => {
    setCategoryItems(itemData.filter(item => item.category === cat));
    setOrderBy('null');
  }, [cat]);


  /**
   * component to show the different types of ordering for the products
   * @returns component react
   */
  function BasicButtonGroup() {
    return (
      <FormControl component="fieldset"
        sx={{ display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',  
          color: '#ebb032',
          fontSize: 34,
          margin: '15px',
          padding: '5px'}}
        >  Order by 
        <ButtonGroup variant="text" aria-label="outlined primary button group" >
          <Button sx={{ color: '#ebb032' }} onClick={() => {
            categoryItems.sort((a,b) => {if (a.price > b.price) {
                return 1; 
              } else if (b.price > a.price) {
                return -1;
              } else {
                return 0;
              }
            });
            //We use the state of orderBy to force rendering, as it is not triggered by Mutable.
            setOrderBy('maxPrice');
          }}>
           Increasing price </Button>
          <Button sx={{ color: '#ebb032' }} onClick={() => {
            categoryItems.sort((a,b) => {if (a.price > b.price) {
              return -1; 
            } else if (b.price > a.price) {
              return 1;
            } else {
              return 0;
            }
          });
            //We use the state of orderBy to force rendering, as it is not triggered by Mutable.
            setOrderBy('minPrice');
          }}>
            Decreasing price </Button>
          <Button sx={{ color: '#ebb032' }} onClick={() => {
            categoryItems.sort((a,b) => {if (a.rating.rate > b.rating.rate) {
                return -1; 
              } else if (b.rating.rate > a.rating.rate) {
                return 1;
              } else {
                return 0;
              }
            });
            //We use the state of orderBy to force rendering, as it is not triggered by Mutable.
            setOrderBy('rating');
          }}>
            Best rated </Button>
        </ButtonGroup>
      </FormControl>
    );
  }


  /**
   * Component to display the products
   * @returns component react
   */
  function TitlebarBelowImageList() {
    return (
      <ImageList
        sx={{p: '15px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignItems: 'stretch',
        }}
        >
        {categoryItems.map((item) => (
          <ImageListItem id='ImageListItem' key={item.image} 
              to={`/single-product/${item.id}`} 
              component={Link}
              >
            <img
              src={`${item.image}?w=248&fit=crop&auto=format`}
              srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar 
              sx={{ color: '#ebb032' }}
              title={item.title}
              subtitle={<>
                <p>Price: {item.price} € </p>
                <Rating name={item.title} value={item.rating.rate} precision={0.1} readOnly />
                </>} 
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }

  if (itemData.length !== 0) {
    // We make sure that the information filtered by category is loaded
    if (categoryItems.length === 0) {
      setCategoryItems(itemData.filter(item => item.category === cat));
    }

    return (<div id='SingleCategory'>
        <BasicButtonGroup />
        <TitlebarBelowImageList />
      </div>
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
}


