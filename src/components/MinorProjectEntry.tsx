import React, { useState } from "react";
import { Link } from "react-router-dom";
import gitHubIcon from "../assets/images/github.png";

interface ProjectEntryProps {
  title: string;
  image?: string;
  type: string;
  technologies: string[];
  date: string;
  repoLink?: string;
  viewMoreLink?: string;
  apiReferenceLink?: string;
  description?: string;
}
const MinorProjectEntry: React.FC<ProjectEntryProps> = ({
  title,
  image,
  type,
  technologies,
  date,
  viewMoreLink,
  apiReferenceLink,
  description,
}) => {
  const techString = technologies.join("  //  ");
  const [isHovered, setHovered] = useState(false);

  return (
    <section className="flex flex-col justify-between gap-8 pt-20 lg:w-1/2">
      <div className="">
        <h2 className={`mb-5 pt-5 font-space text-3xl lg:pt-0 xl:text-3xl`}>
          {title}
        </h2>
        <p className="col-span-4 mb-5 font-space lg:col-span-3 lg:col-start-1 lg:row-start-1">
          {type}
        </p>

        <div
          className="flex w-fit"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {viewMoreLink && (
            <Link
              to={viewMoreLink}
              target=""
              rel="noopener noreferrer"
              className="view-more-button"
            >
              <div
                className="relative flex border border-custom-blue px-4  pr-10
                                transition-all before:absolute before:bottom-0 
                                before:left-0 before:top-0 before:h-full before:w-0  before:bg-purple-500 before:transition-all before:duration-300 hover:border-custom-blue hover:before:left-0 hover:before:w-full hover:before:bg-custom-blue
                                "
              >
                <div
                  className={`duration-100 bg-${isHovered ? "custom-background-gray" : "custom-blue"} rotate-square relative z-10 mr-3 mt-2 h-3 w-3`}
                ></div>
                <h3
                  className={`duration-100 text-${isHovered ? "custom-background-gray" : "custom-blue"} relative z-10 font-space text-xl`}
                >
                  View More
                </h3>
              </div>
            </Link>
          )}
          {apiReferenceLink && (
            <Link
              to={apiReferenceLink}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <div className="flex items-center">
                <img
                  src={gitHubIcon}
                  alt="github"
                  className={`h-8 ${isHovered ? "rotate-45" : "rotate-0"} duration-300 ease-out`}
                />
                <h3
                  className={`pl-5 font-space text-xl text-custom-blue ${isHovered ? "underline" : "no-underline"} duration-300 ease-out`}
                >
                  API Reference
                </h3>
              </div>
            </Link>
          )}
        </div>
      </div>

      <div className="">
        {image ? (
          <img src={image} alt={title} className="w-full" />
        ) : description ? (
          <p className="w-3/4 font-space text-lg">{description}</p>
        ) : null}
      </div>
      <div className="flex justify-between lg:flex-col lg:justify-normal lg:gap-2">
        <p className="font-space">{techString}</p>
        <p className="font-space">{date}</p>
      </div>
    </section>
  );
};

export default MinorProjectEntry;
