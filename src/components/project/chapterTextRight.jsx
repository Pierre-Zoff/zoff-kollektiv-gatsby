import React from "react";
import Image from "../imageFluid";

const ChapterTextRight = (props) => (
  <div className="container chapter">
    <div className="row">
      <div className="col-12 col-md-6">
        <div className="chapter__mediaWrapper">
          {props.media.items &&
            props.media.items.map((item) => (
              <div className="chapter__mediaItem">
                <Image name={item.src} alt={item.alt} />
              </div>
            ))}
        </div>
      </div>
      <div className="col-12 col-md-6 whiteSpace--mt-24">
        <div className="chapter__text">
          <p className="chapter__title">{props.chapterTitle}</p>
          <p className="chapter__description">{props.chapterDescription}</p>
        </div>
      </div>
    </div>
  </div>
);

export default ChapterTextRight;
