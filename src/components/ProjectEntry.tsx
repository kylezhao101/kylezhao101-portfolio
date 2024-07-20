import React, { useState } from "react";
import { Link } from "react-router-dom";

interface ProjectEntryProps {
  title: string;
  image?: string;
  type: string;
  technologies: string[];
  date: string;
  repoLink?: string;
  viewMoreLink?: string;
  apiReferenceLink?: string;
}
const ProjectEntry: React.FC<ProjectEntryProps> = ({
  title,
  image,
  type,
  technologies,
  date,
  viewMoreLink,
  apiReferenceLink,
}) => {
  const techString = technologies.join("  //  ");
  const [isHovered, setHovered] = useState(false);
  const [isProjectHovered, setProjectHovered] = useState(false);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: cursorPosition.y + 20,
          left: cursorPosition.x + 20,
          display: isProjectHovered && !isHovered ? "block" : "none",
        }}
      >
        <h3 className="font-neopixel text-xl text-custom-blue">
          <div className="flex ">
            <div className={`mr-3 mt-2 h-2 w-2 bg-custom-blue`}></div>
            <h3 className="font-space text-base text-custom-blue">/ {title}</h3>
          </div>
        </h3>
      </div>

      <Link
        to={viewMoreLink || apiReferenceLink || ""}
        className="cols-4 grid pt-36 hover:cursor-pointer sm:grid-cols-8 lg:grid-cols-12"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setProjectHovered(true)}
        onMouseLeave={() => setProjectHovered(false)}
      >
        <div className="col-span-4 row-start-2 flex flex-col justify-center sm:col-span-full lg:col-span-6 lg:row-start-1">
          <h2 className={`mb-2 pt-5 font-space text-4xl lg:pt-0 xl:text-6xl`}>
            {title}
          </h2>
          <p className="col-span-4 mb-10 font-space lg:col-span-3 lg:col-start-1 lg:row-start-1">
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
                    API Reference
                  </h3>
                </div>
              </Link>
            )}
          </div>
        </div>
        <div className="col-span-4 sm:col-span-8 lg:col-span-6">
          {image && <img src={image} alt={title} className="w-full" />}
        </div>
      </Link>
      <div
        className={`grid grid-cols-4 gap-0 border-b pb-10 pt-5 font-space transition duration-300 ease-in-out sm:grid-cols-8 lg:grid-cols-12 ${isHovered ? "border-custom-blue" : "border-custom-gray"}`}
      >
        <p className="col-span-2 row-start-2 pt-10 sm:col-span-6 lg:col-span-3 lg:col-start-7 lg:row-start-1 lg:pt-0">
          {techString}
        </p>
        <p className="col-span-2  col-start-4 row-start-2 flex justify-end self-end sm:col-span-4 lg:col-span-3 lg:col-start-12 lg:row-start-1">
          {date}
        </p>
      </div>
    </>
  );
};

export default ProjectEntry;
