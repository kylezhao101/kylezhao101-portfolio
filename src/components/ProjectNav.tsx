import { Link } from "react-router-dom";

const ProjectNav: React.FC<{ projectsData: Array<any> }> = ({
  projectsData,
}) => {
  return (
    <div className="mt-32 px-4 lg:px-20 pt-28">
      <div className="col-span-4 sm:col-span-3 flex items-start pb-5">
        <div className="bg-custom-blue w-3 h-3 mr-3 mt-2"></div>
        <h3 className="font-space text-xl mr-5">Project Directory</h3>
      </div>

      {projectsData.map((project, index) => (
        <Link
          to={
            project.apiReferenceLink
              ? project.apiReferenceLink
              : project.viewMoreLink
          }
          target={project.apiReferenceLink ? "_blank" : "_self"}
          rel={project.apiReferenceLink ? "noopener noreferrer" : ""}
          key={index}
          className="border-t border-black hover:text-custom-blue transition duration-200 ease-in-out py-2 grid grid-cols-12"
        >
          <p className="col-span-2 pr-2 hidden md:block">{project.date}</p>
          <p className="col-span-6 md:col-span-4 pr-2">{project.title}</p>
          <p className="col-span-6 pr-2">{project.type}</p>
        </Link>
      ))}
    </div>
  );
};

export default ProjectNav;
