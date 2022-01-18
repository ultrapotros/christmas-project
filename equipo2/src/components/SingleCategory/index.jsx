
import './component.css';
import { Context } from "../../App.js";
import React , { useState , useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Rating from '@mui/material/Rating';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { CircularProgress, Skeleton, Box } from '@mui/material';


export default function SingleCategory() {
  
  const itemData = useContext(Context);
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
          color: '#1976d2'}}
        > Order by 
        <FormLabel component="legend"></FormLabel>
        <ButtonGroup variant="text" aria-label="outlined primary button group">
          <Button onClick={() => {
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
          <Button onClick={() => {
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
          <Button onClick={() => {
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
          justifyContent: 'center',
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
      <Box sx={{ width: 40 }}>
        <CircularProgress />
      
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
      </Box>
    </>);
  }
}


