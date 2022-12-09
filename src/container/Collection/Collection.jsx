import React from "react";
import { CollectionItem } from "../../components";
import "./Collection.css";
function Collection() {
  return (
    <div className="app__collection flex__center section__padding app__wrapper">
      <div className="app__collection-overlay">
        <div className="app__collection-content">
          <h1 className="headtext__cormorant">Our Collection</h1>
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique.
          </p>
          {/* <div className="app__collection-images flex__center">
            {<CollectionItem />}
          </div> */}
          <div className="headtext__cormorant">WIP</div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
