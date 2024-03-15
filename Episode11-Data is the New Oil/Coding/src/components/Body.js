import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineOfflineStatus from "../utils/useOnlineOfflineStatus";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  //this below state variable is only for the filtered restaurants.
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log(listOfRestaurents)

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
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const isOnline = useOnlineOfflineStatus();

  if(isOnline === false) return <h1>Oops!!! Looks like you are offline. Please check your internet connection.</h1>

  return listOfRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-between items-center py-6 px-8">
        <div className="search flex gap-4">
          <input
            type="text"
            className="search-box ring-2 outline-none rounded-md px-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="text-lg font-medium bg-neutral-800 text-white rounded-md px-6 py-1 cursor-pointer"
            onClick={() => {
              //onClick filter the restaurant cards based on the search condition and update the UI
              const filterRes = listOfRestaurents.filter((restrau) =>
                restrau.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredList(filterRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn bg-neutral-700 text-white rounded-md h-10 px-4 cursor-pointer"
          onClick={() => {
            const filter = listOfRestaurents.filter(
              (val) => val.info.avgRating > 4
            );
            console.log(filter);
            setListOfRestaurents(filter);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 px-8 py-14">
        {filteredList?.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
          <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
