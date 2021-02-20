import React from "react";
import ImageOne from "../../img/story-1.jpeg";
import ImageTwo from "../../img/story-2.jpeg";

const StroyPictures = () => {
  return (
    <div className="story_pictures">
      <img src={ImageOne} alt="" className="story_img-1" />
      <img src={ImageTwo} alt="" className="story_img-2" />
    </div>
  );
};

export default StroyPictures;
