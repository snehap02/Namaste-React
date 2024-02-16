import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  const [listOfRestaurents, setListOfRestaurents] = useState(resList);
  
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
