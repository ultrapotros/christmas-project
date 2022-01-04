
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


export default function SingleCategory() {
  
  const itemData = useContext(Context);
  const { cat } = useParams();
  const [categoryItems, setCategoryItems] = useState([]);
  const [orderBy, setOrderBy] = useState();

  useEffect(() => {}, [orderBy]);

  useEffect(() => {
    setCategoryItems(itemData.filter(item => item.category === cat));
  }, [cat]);

  /**
   * component to show the different types of ordering for the products
   * @returns component react
   */
  function BasicButtonGroup() {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend" sx={{ color:'#1976d2' }}>Ordenado por</FormLabel>
        <ButtonGroup variant="text" aria-label="outlined primary button group">
          <Button onClick={() => {
            categoryItems.sort((a,b) => (a.price > b.price) ? -1 : ((b.price > a.price) ? 1 : 0)); 
            //We use the state of orderBy to force rendering, as it is not triggered by Mutable.
            setOrderBy('maxPrice');
          }}>
           Precio creciente </Button>
          <Button onClick={() => {
            categoryItems.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
            //We use the state of orderBy to force rendering, as it is not triggered by Mutable.
            setOrderBy('minPrice');
          }}>
            Precio decreciente </Button>
          <Button onClick={() => {
            categoryItems.sort((a,b) => (a.rating.rate > b.rating.rate) ? -1 : ((b.rating.rate > a.rating.rate) ? 1 : 0)); 
            //We use the state of orderBy to force rendering, as it is not triggered by Mutable.
            setOrderBy('rating');
          }}>
            Mejor valorado </Button>
        </ButtonGroup>
      </FormControl>
    );
  }

  /**
   * Component to display the products
   * @returns component react
   */
  function TitlebarBelowImageList() {
    //const itemData = props.itemData;
    //sx={{ width: 500 , height: 450 }}  sx={{ width: 500 , m: 2, p: 15 }}  
    //console.log(categoryItems);
    return (
      <ImageList sx={{ margin: '5%',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minWidth:'45%', maxWidth:'65%' }}>
        {categoryItems.map((item) => (
          <ImageListItem key={item.image} 
              to={`/single-product/${item.id}`} 
              component={Link}
              sx={{ minWidth:'25%', maxWidth:'45%' }}
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
                <p>Precio: {item.price} € </p>
                <Rating name={item.title} value={item.rating.rate} precision={0.1} readOnly />
                </>} 
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }

  return (<div className='SingleCategory'>
      <BasicButtonGroup />
      <TitlebarBelowImageList />
    </div>
  );
}



