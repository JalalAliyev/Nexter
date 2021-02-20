import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import RoomIcon from "@material-ui/icons/Room";
import HomeIcon from "@material-ui/icons/Home";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

const Home = ({ homeNumber, ImgSource, header, paragraphs }) => {
  return (
    <div className="home">
      <img src={ImgSource} alt={`House ${homeNumber}`} className="home_img" />
      <FavoriteIcon className="home_like" />
      <h5 className="home_name">{header}</h5>
      <div className="home_location">
        <RoomIcon className="icons" />
        <p>{paragraphs[0]}</p>
      </div>
      <div className="home_rooms">
        <HomeIcon className="icons" />
        <p>{paragraphs[1]}</p>
      </div>
      <div className="home_area">
        <AspectRatioIcon className="icons" />
        <p>
          {paragraphs[2]} m<sup>2</sup>
        </p>
      </div>
      <div className="home_price">
        <AttachMoneyIcon className="icons" />
        <p>${paragraphs[3]}</p>
      </div>
      <button className="btn home_btn">Contact realtor</button>
    </div>
  );
};

export default Home;
