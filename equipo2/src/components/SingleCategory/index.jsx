import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


/**
 * Component to display the products
 * @returns component react
 */
function TitlebarBelowImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.image}>
          <img
            src={`${item.image}?w=248&fit=crop&auto=format`}
            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<div className='BasicProductInformation'>
                <p>Precio: {item.price} </p>
                <p>Valoracion: {item.rating.rate} </p>
              </div>}  //<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

/**
 * Component for ordering information
 * @returns component react
 */
function CheckboxSort() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.value);
  };

  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox 
                                  onChange={handleChange} 
                                  inputProps={ {'category': 'price'} }/>} label="Precio" />
      <FormControlLabel control={<Checkbox 
                                  onChange={handleChange} 
                                  inputProps={ {'category': 'rating'} }/>} label="Valoracion" />
    </FormGroup>
  );
}

export default function SingleCategory() {
  return (<div>
      <CheckboxSort />
      <TitlebarBelowImageList />
    </div>
  );
}

id
title
price
description
category
image
rating
 -rate
 -count