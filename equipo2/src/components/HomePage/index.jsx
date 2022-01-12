import * as React from 'react';
import { useContext } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './component.css';
import { Context } from '../../App';
function srcset(image, size, rows = 1, cols = 1) {
  let col = Math.floor(Math.random() * (5 - 2)) + 1; /* each time we render in a different format */
  let row = Math.floor(Math.random() * (3 - 1)) + 1;
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * col}&h=${
      size * row
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function HomePage() {
  const contextValue = useContext(Context); /* getting data from context */
      return (
    <ImageList className="imagesContainer"
      sx={{ width: 3/4, height: 4/4 }} /*  giving style to the images container */
      variant="quilted"
      cols={4}
      rowHeight={121}
      gap={10}
    >
      {contextValue.map((item) => ( /* rendering all products */
        <ImageListItem id="images" key={item.image} cols={1} rows={Math.floor(Math.random() * (3 - 1)) + 1}>
          <img className="productImages"
            {...srcset(item.image, 200, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );

}



