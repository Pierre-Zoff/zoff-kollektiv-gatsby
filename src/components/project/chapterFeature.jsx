import React from "react";
import Image from "../imageFluid";

const ChapterFeature = (props) => (
  <div className="bg--c2">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="feature__wrapper">
            <div className="feature__media">
            {props.media && (
              <Image
                name={props.media.src}
                alt={props.media.alt}
              />
            )}
            </div>
            <div className="feature__mediaCredits">
              {props.media.credits}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default ChapterFeature;
