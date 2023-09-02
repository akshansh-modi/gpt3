import React from "react";
import "./feature.css";
// rafce for functional component
const Feature = ({title,text}:any) => {
  return (
    <div className="gpt3__features-conatainer__feature">
      <div className="gpt3__features-container__feature-title">
        <div />

        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container__feature-text">

{text}


      </div>
    </div>
  );
};

export default Feature;
