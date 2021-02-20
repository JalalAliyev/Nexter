import React from "react";

const Feature = ({ Icon, header, paragraph }) => {
  return (
    <div className="feature">
      <Icon className="feature_icon" />
      <h4 className="heading-4 heading-4-dark">{header}</h4>
      <p className="feature_text">{paragraph}</p>
    </div>
  );
};

export default Feature;
