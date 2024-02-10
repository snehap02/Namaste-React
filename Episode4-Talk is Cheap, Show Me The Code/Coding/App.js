import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png" alt="" className="logo" />
            </div>
            <div className="nav-links">
                <ul className="links">
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact US</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img src="https://cookingfromheart.com/wp-content/uploads/2017/09/Veg-Biryani-in-Pressure-Cooker-6.jpg" alt="res-logo" />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>⭐4.4</h4>
            <h4>38 Minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian, Asian"/>
                <RestaurantCard resName="KFC" cuisine="Fast Food"/>
            </div>
        </div>
    )
}

const AppContainer = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppContainer/>)