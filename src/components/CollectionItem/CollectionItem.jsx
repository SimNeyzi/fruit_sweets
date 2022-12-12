import React from "react";
import { images } from "../../constants";
import "./CollectionItem.css";

function Collectionitem() {
  return (
    <div className="app__collectionItem">
      <div className="app__collectionItem-content">
        <div className="app__collectionItem-image">
          <img src={images.collection_img} alt="product" />
        </div>

        <div className="app__collectionItem-name">
          <h3>Cadeau De Noel Parfait - Rectangle</h3>
        </div>

        <div className="app__collectionItem-addToCart">
          <div className="app__collectionItem-addToCart_quantity">
            <button
              className="app__collectionItem-addToCart-minusBtn"
              type="button"
            >
              -
            </button>
            <input
              className="app__collectionItem-addToCart-input"
              min="0"
              max="10"
              // value="1"
              type="number"
            />
            <button
              className="app__collectionItem-addToCart-plusBtn"
              type="button"
            >
              +
            </button>
          </div>
          <div className="app__collectionItem-addToCart_button">
            <button type="button">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collectionitem;
