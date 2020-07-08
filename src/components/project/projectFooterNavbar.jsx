import React from "react";
import { Link } from "gatsby";
import ArrowIcon from "../../assets/icons/arrowIcon";

const ProjectFooterNavbar = ({
  previous = { link: "", projectName: "prev" },
  next = { link: "", projectName: "next" },
  ...props
}) => {
  return (
    <div className="relative bg-gray py-2">
      <div className="container flex justify-between w-full">
        <Link className="text-white no-underline hover:underline" to={`projekte/${previous.link}`}>
          <ArrowIcon width="20" className="transform -rotate-90 inline-block" />
          <span className="inline-block ml-1">{previous.projectName}</span>
        </Link>
        <button className="absolute ml-auto mr-auto left-0 right-0">
          <a href="#top">
            <ArrowIcon width="20" style={{ marginTop: "5px" }} />
          </a>
        </button>
        <Link className="text-white no-underline hover:underline" to={`projekte/${next.link}`}>
          <span className="inline-block mr-1">{next.projectName}</span>
          <ArrowIcon width="20" className="transform rotate-90 inline-block" />
        </Link>
      </div>
    </div>
  );
};
export default ProjectFooterNavbar;
