import React from "react";
import Image from "../imageFluid";

const ProjectHighlightTextRight = (props) => (
  <div className="projectHighlight">
    <div className="container">
      <div className="row flex-md-row flex-column-reverse">
        <div className="col-12 col-md-6 whiteSpace--mt-24">
          <div className="projectHighlight__mediaWrapper">
            <div className="projectHighlight__media">
              {props.media && (
                <Image name={props.media.src} alt={props.media.alt} />
              )}
            </div>
            <div className="projectHighlight__mediaCredits">
              {props.media.credits}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="projectHighlight__text">
            <p className="projectHighlight__title">{props.title}</p>
            <p className="projectHighlight__description">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectHighlightTextRight;
