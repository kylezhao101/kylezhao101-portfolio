import { Link } from "react-router-dom";

interface Project {
  title: string;
  type: string;
  date?: string;
  viewMoreLink?: string;
  apiReferenceLink?: string;
}

const ProjectNav: React.FC<{ projectsData: Project[] }> = ({
  projectsData,
}) => {
  return (
    <div className="mt-32 px-4 pt-28 lg:px-20">
      <div className="col-span-4 flex items-start pb-5 sm:col-span-3">
        <div className="mr-3 mt-2 h-3 w-3 bg-custom-blue"></div>
        <h3 className="mr-5 font-space text-xl">Project Directory</h3>
      </div>

      {projectsData.map((project, index) =>
        project.apiReferenceLink ? (
          <a
            href={project.apiReferenceLink}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="grid grid-cols-12 border-t border-black py-2 transition duration-200 ease-in-out hover:text-custom-blue"
          >
            <p className="col-span-2 hidden pr-2 md:block">{project.date}</p>
            <p className="col-span-6 pr-2 md:col-span-4">{project.title}</p>
            <p className="col-span-6 pr-2">{project.type}</p>
          </a>
        ) : (
          <Link
            to={project.viewMoreLink!}
            key={index}
            className="grid grid-cols-12 border-t border-black py-2 transition duration-200 ease-in-out hover:text-custom-blue"
          >
            <p className="col-span-2 hidden pr-2 md:block">{project.date}</p>
            <p className="col-span-6 pr-2 md:col-span-4">{project.title}</p>
            <p className="col-span-6 pr-2">{project.type}</p>
          </Link>
        ),
      )}
    </div>
  );
};

export default ProjectNav;
