import React from "react";

const Collection = ({
  collection,
  handleSelected,
  handleCollectionRemove,
  handleViewCollection
}) => {
  //set selected state to selected breed and set viewCollection state to false to hide
  function handleClick(entry) {
    handleSelected(entry.selected);
    handleViewCollection(false);
  }
  return (
    <>
      <div className="collections">
        {collection.map(entry => {
          return (
            <div className="collection">
              <div className="info">
                <img src={entry.image} />
                <p>{entry.selected}</p>
              </div>
              <div className="btns">
                <button className="view" onClick={() => handleClick(entry)}>
                  View
                </button>
                <button
                  className="remove"
                  onClick={() => handleCollectionRemove(entry.selected)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Collection;
