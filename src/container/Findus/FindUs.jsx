import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const FindUs = () => {
  return (
    <div className="app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          Find Us
        </h1>
        <div className="app__wrapper-content">
          <p className="p__opensans"></p>
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.findus} alt="find us" />
      </div>
    </div>
  );
};
export default FindUs;
