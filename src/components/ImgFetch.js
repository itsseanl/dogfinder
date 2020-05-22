import React, { useEffect } from "react";

const ImgFetch = ({ images, selected, handleSetImages }) => {
  //fetch images from endpoint based on selected breed
  const fetchImages = async () => {
    if (selected) {
      const request = await fetch(
        `https://dog.ceo/api/breed/${selected}/images`,
        {
          method: "GET",
          "Content-Type": "application/json"
        }
      );
      const response = await request.json();
      //return image array response to app.js to setState
      handleSetImages(response.message);
    }
  };
  //run fetchImages when selected changes
  useEffect(() => {
    fetchImages();
  }, [selected]);
  return (
    <div className="images">
      {images &&
        images.map((image, index) => {
          return (
            <div key={`divimg${index}`} className="image">
              <img key={image + index} src={image} alt={image} />
            </div>
          );
        })}
    </div>
  );
};

export default ImgFetch;
