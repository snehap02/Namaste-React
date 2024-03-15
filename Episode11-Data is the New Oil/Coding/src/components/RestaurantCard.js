import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // const {resName, cuisine} = props;
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
  return (
    <div className="res-card px-2 bg-neutral-300 p-2 shadow-md shadow-neutral-400 h-full">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="bg-neutral-200 p-3 rounded-md hover:scale-95 transition-all hover:duration-300 shadow-md hover:shadow-neutral-600"
      />
      <h3 className="text-2xl font-bold">{name}</h3>
      {/* if you have an array in your JSON data just join them with gap and commas with (.join()) */}
      <h4 className="font-medium">{cuisines.join(" , ")}</h4>
      <h4 className="font-bold text-lg">⭐{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
