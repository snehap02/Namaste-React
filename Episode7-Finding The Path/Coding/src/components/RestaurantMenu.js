import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER");
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
          //always mention key when you are using map
          <li key={item.card.info.id}>
            {item.card.info.name} -- Rs{" "}
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
