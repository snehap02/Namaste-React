import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // const {resName, cuisine} = props;
  const { resData } = props;
  const { name, cuisines, avgRating, slaString, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img src={CDN_URL + cloudinaryImageId} alt="res-logo" />
      <h3>{name}</h3>
      {/* if you have an array in your JSON data just join them with gap and commas with (.join()) */}
      <h4>{cuisines.join(" , ")}</h4>
      <h4>⭐{avgRating}</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
