import * as React from 'react';
import { useContext } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './component.css';
import { Context } from '../../App';
function srcset(image, size, rows = 1, cols = 1) {
  let col = Math.floor(Math.random() * (5 - 2)) + 1;
  let row = Math.floor(Math.random() * (3 - 1)) + 1;
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * col}&h=${
      size * row
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function HomePage() {
  const contextValue = useContext(Context);
  return (
    <ImageList className="imagesContainer"
      sx={{ width: 3/4, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
      gap={10}
    >
      {contextValue.map((item) => (
        <ImageListItem key={item.image} cols={1} rows={Math.floor(Math.random() * (3 - 1)) + 1}>
          <img
            {...srcset(item.image, 200, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}



