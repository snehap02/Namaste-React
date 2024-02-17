import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  const [listOfRestaurents, setListOfRestaurents] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING');

    const json = await data.json();
    console.log(json);
    // setListOfRestaurents(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filter = listOfRestaurents.filter(
              (val) => val.data.avgRating > 4
            );
            setListOfRestaurents(filter);
          }}
        >Click Here to Filter Restraurents</button>
      </div>
      <div className="res-container">
        {listOfRestaurents.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
