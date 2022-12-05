import React from "react";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  return (
    <div className="app__speacialMenu flex__center section__padding" id="menu">
      <div className="app__speacialMenu-title">
        <SubHeading title="Menu that fits your palette" />
        <h1 className="headtext__cormorant">Specials</h1>
      </div>

      <div className="app__speacialMenu-menu">
        <div className="app__speacialMenu-menu_wine flex__center">
          <p className="app__speacialMenu-menu_heading">Wine & Beer</p>
          <div className="app__speacialMenu-menu_items">
            {data.wines.map((wine, index) => {
              return (
                <MenuItem
                  key={wine.title + index}
                  title={wine.title}
                  price={wine.price}
                  tags={wine.tags}
                />
              );
            })}
          </div>
        </div>

        <div className="app__speacialMenu-menu_img">
          <img src={images.clover} alt="clover" />
        </div>

        <div className="app__speacialMenu-menu_cocktail flex__center">
          <p className="app__speacialMenu-menu_heading">Cocktails</p>
          <div className="app__speacialMenu-menu_items">
            {data.cocktails.map((cocktail, index) => {
              return (
                <MenuItem
                  key={cocktail.title + index}
                  title={cocktail.title}
                  price={cocktail.price}
                  tags={cocktail.tags}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "15px" }}>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
