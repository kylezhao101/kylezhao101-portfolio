import ProjectEntry from "../../components/ProjectEntry";
import projectsData from "../../projectsData";

const Projects: React.FC = () => {
  return (
    <>
      <section className="a-section bg-custom-background-gray pt-40">
        <div className="flex items-center overflow-hidden ">
          <h2 className="a-section-marquee-text font-space text-4xl md:text-5xl lg:text-8xl">
            {" "}
            MY PROJECTS // MY PROJECTS // MY PROJECTS //
          </h2>
          <h2 className="a-section-marquee-text font-space text-4xl md:text-5xl lg:text-8xl">
            {" "}
            MY PROJECTS // MY PROJECTS // MY PROJECTS //
          </h2>
        </div>
      </section>

      <section className="bg-custom-background-gray px-4 sm:px-20 ">
        {projectsData.map((project, index) => (
          <ProjectEntry
            key={index}
            title={project.title}
            image={project.image}
            type={project.type}
            technologies={project.technologies}
            date={project.date}
            viewMoreLink={project.viewMoreLink}
            apiReferenceLink={project.apiReferenceLink}
          />
        ))}
      </section>
    </>
  );
};

export default Projects;
