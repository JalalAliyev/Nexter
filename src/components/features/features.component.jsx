import React from "react";

import Feature from "./feature.component";
import { featuresDatas } from "../../data/features.data/features-data.container";

const Features = () => {
  return (
    <section className="features">
      {featuresDatas.map((data) => (
        <Feature
          Icon={data.Icon}
          header={data.header}
          paragraph={data.paragraph}
        />
      ))}
    </section>
  );
};

export default Features;
