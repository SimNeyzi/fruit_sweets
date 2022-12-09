import React from "react";
import { images } from "../../constants";

function Collectionitem() {
  return (
    <div className="app__collectionItem flex__center">
      <div className="app__collectionItem-content">
        <div className="app__collectionItem-card">
          <div className="app__collectionItem-image">
            <img src={images.collection_img} alt="product" />
          </div>
          <div className="app__collectionItem-info">
            <div className="app__collection-name">
              <h3>Cadeau De Noel Parfait - Rectangle</h3>
            </div>
            <div className="app__collection-stars"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collectionitem;
