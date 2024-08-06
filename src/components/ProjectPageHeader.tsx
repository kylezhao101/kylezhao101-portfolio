import React from "react";
import { Link } from "react-router-dom";

interface ProjectDetails {
  title: string;
  pageImage?: string;
  type: string;
  technologies: string[];
  date: string;
  repoLink?: string;
  pageImageCaption?: string;
  scope?: string;
  timeSpan?: string;
  timeDescription?: string;
  siteLink?: string;
}
interface ProjectDetailProps {
  project: ProjectDetails;
}

const ProjectPageHeader: React.FC<ProjectDetailProps> = ({ project }) => {
  const techString = project.technologies.join(", ");

  return (
    <section className="grid grid-cols-12 px-4 pt-20 lg:px-20">
      <div className="col-span-full row-start-1 md:col-span-5 md:flex md:flex-col md:justify-end">
        <div className="swipe">
          <h2 className="swipe-text pt-5 text-4xl lg:pt-0 xl:text-6xl">
            {project.title}
          </h2>
          <p className="swipe-text text-custom-blue mt-2">{project.type}</p>
        </div>
        <div className="flex gap-5 mt-1">
          {project.repoLink && (
            <Link
              to={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="swipe flex w-fit items-center transition duration-200 ease-in-out hover:text-custom-blue"
            >
              <p className="swipe-text">View Repository</p>
            </Link>
          )}
          {project.siteLink && (
            <Link
              to={project.siteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="swipe flex w-fit items-center transition duration-200 ease-in-out hover:text-custom-blue"
            >
              <p className="swipe-text">View Site</p>
            </Link>
          )}
        </div>
        <div className="col-span-7 col-start-7 row-start-2 mt-20 flex  flex-wrap">
          <div className="w-1/2 pb-5 pr-5">
            <p className="font-bold">Tools</p>
            <p className="w-3/4">{techString}</p>
          </div>
          <div className="w-1/2 pb-5 pr-5">
            <p className="font-bold">Timespan</p>
            <p>{project.timeSpan}</p>
            <p>{project.timeDescription}</p>
          </div>
          <div className="w-1/2 pb-5 pr-5">
            <p className="font-bold">Type</p>
            <p>{project.scope}</p>
          </div>
        </div>
      </div>

      <div className="col-span-12 row-start-2 mt-10 md:col-span-6 md:col-start-7 md:row-start-1">
        {<img src={project.pageImage} alt={project.title} className="w-full" />}
        <p className="pt-2">{project.pageImageCaption}</p>
      </div>
    </section>
  );
};

export default ProjectPageHeader;
