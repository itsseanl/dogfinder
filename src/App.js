import React, { useState, useEffect } from "react";
import "./App.css";
import DogFetch from "./components/DogFetch";
import ImgFetch from "./components/ImgFetch";
import CollectionControls from "./components/CollectionControls";
import Collection from "./components/Collection";

function App() {
  //initialize state
  const [breeds, setBreeds] = useState([]);
  const [selected, setSelected] = useState(null);
  const [images, setImages] = useState([]);
  const [collection, setCollection] = useState([]);
  const [viewCollection, setViewCollection] = useState(false);

  useEffect(() => {
    localStorage.getItem("adfbreeds");
  }, []);

  const handleSetImages = imgList => {
    setImages(imgList);
  };

  //handle adding breed to collection
  const handleCollectionAdd = () => {
    //get current state
    let newCollection = [...collection];
    let exists = false;

    //if collection is not empty
    if (newCollection.length > 0) {
      // map through array to check for selected breed in collection
      newCollection.map(entry => {
        if (entry.selected.includes(selected)) {
          //if exists, alert user and set exists to true
          alert("Breed exists in collection!");
          return (exists = true);
        }
      });
    }
    //if breed does not exist in collection. Condition defaults to true for initial state
    if (exists == false) {
      newCollection.push({ selected: selected, image: images[0] });
      setCollection(newCollection);
      setViewCollection(true);
    }
  };

  //remove breed from collection
  const handleCollectionRemove = remove => {
    let newCollection = [...collection];
    //filter out the selection
    newCollection = newCollection.filter(entry => {
      return entry.selected != remove;
    });
    setCollection(newCollection);
  };

  //sets the state of breed list dropdown
  const handleBreeds = breedList => {
    setBreeds(breedList);
  };

  //sets the state of currently selected breed
  const handleSelected = selected => {
    setSelected(selected);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  //sets the state of the viewCollection state (shows/hides collection)
  const handleViewCollection = view => {
    setViewCollection(view);
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Authentise DogFinder</h1>
        </header>
        <div className="wrapper">
          <div className="controls">
            <DogFetch
              breeds={breeds}
              handleBreeds={handleBreeds}
              handleSelected={handleSelected}
            />
            {selected && (
              <CollectionControls
                handleCollectionAdd={handleCollectionAdd}
                collection={collection}
                viewCollection={viewCollection}
                handleViewCollection={handleViewCollection}
              />
            )}
            {viewCollection && (
              <Collection
                collection={collection}
                handleSelected={handleSelected}
                handleViewCollection={handleViewCollection}
                handleCollectionRemove={handleCollectionRemove}
              />
            )}
          </div>
          {selected && (
            <ImgFetch
              images={images}
              selected={selected}
              handleSetImages={handleSetImages}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
