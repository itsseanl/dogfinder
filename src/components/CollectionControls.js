import React from "react";

const CollectionControls = ({
  handleCollectionAdd,
  collection,
  viewCollection,
  handleViewCollection
}) => {
  return (
    <div className="add">
      <button onClick={handleCollectionAdd}>Add to collection</button>
      {collection.length > 0 &&
        (viewCollection ? (
          <button onClick={() => handleViewCollection(false)}>
            Hide Collection
          </button>
        ) : (
          <button onClick={() => handleViewCollection(true)}>
            View Collection
          </button>
        ))}
    </div>
  );
};
export default CollectionControls;
