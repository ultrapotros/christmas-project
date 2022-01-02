import React , { useContext } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Context } from "../../App.js";
import { useParams, Link } from 'react-router-dom';


/**
 * Component to display the products
 * @returns component react
 */
function TitlebarBelowImageList(props) {
  const itemData = props.itemData;
  //sx={{ width: 500 , height: 450 }}
  return (
    <ImageList>
      {itemData.map((item) => (
        <ImageListItem key={item.image} to={`/single-product/${item.id}`} component={Link}>
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
function CheckboxSort(itemData) {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    itemData.sort(event.target.value.category);
  };

  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox 
                                  onChange={handleChange} 
                                  inputProps={ {'category': 'price'} }/>} 
                                  label="Precio" />
      <FormControlLabel control={<Checkbox 
                                  onChange={handleChange} 
                                  inputProps={ {'category': 'rating'} }/>} 
                                  label="Valoracion" />
    </FormGroup>
  );
}

export default function SingleCategory() {
  const itemData = useContext(Context);
  const { cat } = useParams();
  const category = itemData.filter(item => item.category === cat);

  return (<div className='SingleCategory'>
      <CheckboxSort itemData={category}/>
      <TitlebarBelowImageList itemData={category}/>
    </div>
  );
}
