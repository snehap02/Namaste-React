import React from "react";
//we dont use ./components in the below line because the body and the restrau cards are at the same folder....earlier we were exporting our components to app so app.js is outside the components folder that is why while importing we wrote ./components/nameofthecomponent.
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
//This below useState is a named import from react
import { useState } from "react";

const Body = () => {

  const [listOfRestaurents, setListOfRestaurents] = useState(resList);

  // let listOfRestaurents = [
  //   {
  //     data: {
  //       id: "74453",
  //       name: "Domino's Pizza",
  //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //       cuisines: ["Pizzas"],
  //       deliveryTime: 45,
  //       slaString: "45 MINS",
  //       avgRating: "4.0",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "74454",
  //       name: "KFC",
  //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //       cuisines: ["Pizzas"],
  //       deliveryTime: 45,
  //       slaString: "45 MINS",
  //       avgRating: "3.5",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "74455",
  //       name: "MCD",
  //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //       cuisines: ["Pizzas"],
  //       deliveryTime: 45,
  //       slaString: "45 MINS",
  //       avgRating: "4.8",
  //     },
  //   },
  // ];
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
        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[4]} /> */}
        {listOfRestaurents.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
