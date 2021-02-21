import React from "react";
import RealtorOne from "../../img/realtor-1.jpeg";
import RealtorTwo from "../../img/realtor-2.jpeg";
import RealtorThree from "../../img/realtor-3.jpeg";

const Relators = () => {
  return (
    <div className="realtors">
      <h3 className="heading-3">Top 3 Realtors</h3>
      <div className="realtors_list">
        <img
          src={RealtorOne}
          alt="Something went wrong"
          className="realtors_img"
        />
        <div className="realtors_details">
          <h4 className="heading-4 heading-4-light">Erik Feiman</h4>
          <p className="realtors_sold">245 houses sold</p>
        </div>
        <img
          src={RealtorTwo}
          alt="Something went wrong"
          className="realtors_img"
        />
        <div className="realtors_details">
          <h4 className="heading-4 heading-4-light">Kim Brown</h4>
          <p className="realtors_sold">245 houses sold</p>
        </div>
        <img
          src={RealtorThree}
          alt="Something went wrong"
          className="realtors_img"
        />
        <div className="realtors_details">
          <h4 className="heading-4 heading-4-light">Toby Ramsey</h4>
          <p className="realtors_sold">212 houses sold</p>
        </div>
      </div>
    </div>
  );
};

export default Relators;
