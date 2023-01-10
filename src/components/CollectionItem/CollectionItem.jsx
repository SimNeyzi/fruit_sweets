import React, { useState } from "react";
import { images } from "../../constants";
import "./CollectionItem.css";

function Collectionitem() {
  const [quantity, setQuantity] = useState(1);

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
              onClick={() =>
                quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)
              }
            >
              -
            </button>
            <input
              className="app__collectionItem-addToCart-input"
              value={quantity}
              type="text"
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />

            <button
              className="app__collectionItem-addToCart-plusBtn"
              type="button"
              onClick={() => setQuantity(quantity + 1)}
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
