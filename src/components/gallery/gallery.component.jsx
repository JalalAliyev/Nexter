import React from "react";
import ImageOne from "../../img/gal-1.jpeg";
import ImageTwo from "../../img/gal-2.jpeg";
import ImageThree from "../../img/gal-3.jpeg";
import ImageFour from "../../img/gal-4.jpeg";
import ImageFive from "../../img/gal-5.jpeg";
import ImageSix from "../../img/gal-6.jpeg";
import ImageSeven from "../../img/gal-7.jpeg";
import ImageEight from "../../img/gal-8.jpeg";
import ImageNine from "../../img/gal-9.jpeg";
import ImageTen from "../../img/gal-10.jpeg";
import ImageEleven from "../../img/gal-11.jpeg";
import ImageTwelve from "../../img/gal-12.jpeg";
import ImageThirteen from "../../img/gal-13.jpeg";
import ImageFourteen from "../../img/gal-14.jpeg";

const Gallery = () => {
  return (
    <section className="gallery">
      <figure className="gallery_item gallery_item-1">
        <img src={ImageOne} alt="" className="gallery_img" />
      </figure>
      <figure className="gallery_item gallery_item-2">
        <img src={ImageTwo} alt="" className="gallery_img" />
      </figure>
      <figure className="gallery_item gallery_item-3">
        <img src={ImageThree} alt="" className="gallery_img" />
      </figure>
      <figure className="gallery_item gallery_item-4">
        <img src={ImageFour} alt="" className="gallery_img" />
      </figure>
      <figure className="gallery_item gallery_item-5">
        <img src={ImageFive} alt="" className="gallery_img" />
      </figure>
      <figure className="gallery_item gallery_item-6">
        <img src={ImageSix} alt="" className="gallery_img" />
      </figure>
      <figure className="gallery_item gallery_item-7">
        <img src={ImageSeven} alt="" className="gallery_img" />
      </figure>
      <figure className="gallery_item gallery_item-8">
        <img src={ImageEight} alt="" className="gallery_img" />
      </figure>
      <figure className="gallery_item gallery_item-9">
        <img src={ImageNine} alt="" className="gallery_img" />
      </figure>
      <figure className="gallery_item gallery_item-10">
        <img src={ImageTen} alt="" className="gallery_img" />
      </figure>
      <figure className="gallery_item gallery_item-11">
        <img src={ImageEleven} alt="" className="gallery_img" />
      </figure>
      <figure className="gallery_item gallery_item-12">
        <img src={ImageTwelve} alt="" className="gallery_img" />
      </figure>
      <figure className="gallery_item gallery_item-13">
        <img src={ImageThirteen} alt="" className="gallery_img" />
      </figure>
      <figure className="gallery_item gallery_item-14">
        <img src={ImageFourteen} alt="" className="gallery_img" />
      </figure>
    </section>
  );
};

export default Gallery;
