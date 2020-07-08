import React, { useContext } from "react";
import Image from "../imageFluid";
import StateContext from "../helpers/stateContext";
import { Link } from "gatsby";

const ProjectTitle = ({ children, ...props }) => {
  const { navBarHeight } = useContext(StateContext);
  return (
    <>
      <div
        className="sticky mb-6 important:top-0 sm:top-auto"
        style={{ top: navBarHeight, maxHeight: "80vh" }}
      >
        <Image name={props.projectImage} />
      </div>
      <div className="text-gray container -mt-2 z-30 relative grid grid-cols-12 sm:col-gap-12 col-gap-2">
        <div className="col-span-10 col-start-2 bg-white z-10 relative py-10 sm:py-16 md:py-20 grid grid-cols-10 sm:col-gap-12 col-gap-2">
          <div className="col-span-8 col-start-2 my-3">
            <Link to={`projekte/${props.projectSlug}`} className="no-underline">
              <h1 className="text-2xl sm:text-8xl">{props.projectTitle}</h1>
              <h2 className="text-base sm:text-2xl leading-6">
                {props.projectSubtitle}
              </h2>
              <p className="mt-1 hyphens-auto text-sm sm:text-lg">
                {props.projectDescription}
              </p>
              <p className="mt-1 text-sm">
                {props.projectMeta &&
                  props.projectMeta.map((item) => (
                    <>
                      <span className="uppercase mr-1 font-bold">
                        {item.metaTag}
                      </span>
                      <span>{item.metaInfo}</span>
                    </>
                  ))}
              </p>
              {children}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectTitle;
