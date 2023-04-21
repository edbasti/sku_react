import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

const App = () => {
  const [images, setImages] = useState([]);

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    if (!images.includes(randomNumber)) {
      setImages((images) => {
        return images.concat([randomNumber]);
      });
    }
  };

  const handleRemove = () => {
    const randomNumber = Math.floor(Math.random() * images.length);
    const newImages = images.filter(function (item) {
      return item !== images[randomNumber];
    });

    setImages(newImages);
  };

  return (
    <div>
      <h1>React Image Generator</h1>
      <button onClick={handleClick}>Add image</button>
      <button onClick={handleRemove}>Remove random image</button>
      <div className="container-images">
        {images.map((i) => (
          <LazyLoadImage
            key={i}
            src={`https://picsum.photos/id/${i}/500`}
            alt={`Image Alt-${i}`}
            className="img-lazy"
            width={700}
            height={500}
            effect="blur"
          />
        ))}
      </div>
    </div>
  );
};
export default App;
