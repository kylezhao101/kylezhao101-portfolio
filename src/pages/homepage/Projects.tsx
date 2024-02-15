import ProjectEntry from "../../components/ProjectEntry";
import projectsData from "../../projectsData";
import MinorProjectEntry from "../../components/MinorProjectEntry";

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
        {projectsData.slice(0, 2).map((project, index) => (
          <ProjectEntry
            key={index}
            title={project.title}
            image={project.image}
            type={project.type}
            technologies={project.technologies}
            date={project.date}
            viewMoreLink={project.viewMoreLink}
            apiReferenceLink={project.apiReferenceLink}
            repoLink={project.repoLink}
          />
        ))}

        <h2 className="pt-20 font-space text-3xl md:text-4xl lg:text-5xl">
          //Other Work
        </h2>
        <div className="flex flex-wrap border-b border-custom-gray pb-10 ">
          {projectsData.slice(2, 4).map((project, index) => (
            <MinorProjectEntry
              key={index}
              title={project.title}
              image={project.image}
              type={project.type}
              technologies={project.technologies}
              date={project.date}
              viewMoreLink={project.viewMoreLink}
              apiReferenceLink={project.apiReferenceLink}
              description={project.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
