import { useState, useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.16363&lng=91.7611838&restaurantId=66963&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
  };
  return (
    <div className="menu">
      <h1 className="name">Name Of The Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li className="menu1">Menu 1</li>
        <li className="menu2">Menu 2</li>
        <li className="menu3">Menu 3</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
