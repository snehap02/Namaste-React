import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.16363&lng=91.7611838&restaurantId=791635&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  // 🟡 if we first try to find names and all the properties from resInfo without checking whether its value is null or not react will not able to find any properties inside it, so first check the value of resInfo before finding any value

  // if resInfo is null then do this
  if (resInfo === null) return <Shimmer />;

  // if not null then do this
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <h2>{costForTwoMessage}</h2>
      <hr></hr>
      <h1>Menus :-------</h1>
      <ul>
        {itemCards.map((item) => (
          <li>{item.card.info.name} -- Rs {item.card.info.defaultPrice/100 || item.card.info.price/100}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
