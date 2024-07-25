import ProjectEntry from "../../components/ProjectEntry";
import projectsData from "../../projectsData";
import MinorProjectEntry from "../../components/MinorProjectEntry";
import { VelocityScroll } from "../../components/magicui/scroll-based-velocity";

const Projects: React.FC = () => {
  return (
    <>
      <section className="a-section bg-custom-background-gray pt-40">
        <VelocityScroll
          text="FEATURED PROJECTS ²//"
          default_velocity={1}
          className="font-space text-4xl md:text-5xl lg:text-8xl tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:leading-[5rem]"
        />
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
        <VelocityScroll
          text="OTHER WORK ⁴//"
          default_velocity={1}
          className="font-space text-4xl md:text-5xl lg:text-8xl tracking-[-0.02em] text-gray-400 drop-shadow-sm pt-20 dark:text-white md:leading-[5rem]"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
          {projectsData.slice(2, 6).map((project, index) => (
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
