import React, { useEffect } from "react";

const DogFetch = ({ breeds, handleBreeds, handleSelected }) => {
  useEffect(() => {
    fetchDogs();
  }, []);

  const fetchDogs = async () => {
    //try catch to handle error if fetch fails
    //fetch breed list
    const request = await fetch("https://dog.ceo/api/breeds/list/all", {
      method: "GET",
      "Content-Type": "application/json"
    });
    //retrieve resposne as JSON
    let breeds = await request.json();
    breeds = breeds.message;
    // console.log(breeds);
    let breedList = [];
    //map through each entry, ignoring sub-breeds
    Object.entries(breeds).map(entry => {
      breedList.push(entry[0]);
    });
    handleBreeds(breedList);
  };
  return (
    <div className="search">
      <p>Show me</p>
      <select onChange={e => handleSelected(e.currentTarget.value)}>
        <option></option>
        {breeds &&
          breeds.map((breed, index) => {
            return <option key={breed + index}>{breed}</option>;
          })}
      </select>
      <p>dogs!</p>
    </div>
  );
};

export default DogFetch;
