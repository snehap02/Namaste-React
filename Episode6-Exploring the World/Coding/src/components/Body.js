import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

  const [listOfRestaurents, setListOfRestaurents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.16363&lng=91.7611838&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

    const json = await data.json();
    console.log(json);
    setListOfRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  //🟡conditional rendering
  // if(listOfRestaurents.length === 0){
  //   return <Shimmer/>
  // }

  //ternary operator from js
  return listOfRestaurents.length === 0 ? <Shimmer/> : (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filter = listOfRestaurents.filter(
              (val) => val.info.avgRating > 4
            );
            console.log(filter)
            setListOfRestaurents(filter);
          }}
        >Click Here to Filter Restraurents</button>
      </div>
      <div className="res-container">
        {listOfRestaurents?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
