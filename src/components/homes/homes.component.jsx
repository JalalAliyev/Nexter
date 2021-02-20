import React from "react";
import { homesDatas } from "../../data/homes-data/homes-data.container";
import Home from "./home.component";

const Homes = () => {
  return (
    <section className="homes">
      {homesDatas.map((data) => (
        <Home
          key={data.homeNumber}
          homeNumber={data.homeNumber}
          ImgSource={data.ImgSource}
          header={data.header}
          paragraphs={data.paragraphs}
        />
      ))}
    </section>
  );
};

export default Homes;
