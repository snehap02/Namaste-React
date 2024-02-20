import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  //this below state variable is only for the filtered restaurants.
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  //🟡Whenever state variable upadtes, react triggers a reconciliation cycle (re-renders the components)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.16363&lng=91.7611838&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurents(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
  };
  //🟡conditional rendering
  // if(listOfRestaurents.length === 0){
  //   return <Shimmer/>
  // }

  //ternary operator from js
  return listOfRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //onClick filter the restaurant cards based on the search condition and update the UI
              // console.log(searchText);
              const filterRes = listOfRestaurents.filter((restrau) =>
              //🟡 This is a JavaScript method that converts a string to lowercase. It's applied to both restrau.info.name and searchText.🔴Used in search functionalities to perform case-insensitive matching.
                restrau.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filterRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filter = listOfRestaurents.filter(
              (val) => val.info.avgRating > 4
            );
            console.log(filter);
            setListOfRestaurents(filter);
          }}
        >
          Click Here to Filter Restraurents
        </button>
      </div>
      <div className="res-container">
        {filteredList?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
