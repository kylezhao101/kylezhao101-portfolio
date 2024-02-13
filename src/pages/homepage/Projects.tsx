import ProjectEntry from '../../components/ProjectEntry';
import projectsData from '../../projectsData'

const Projects: React.FC = () => {
    return (
        <>
            <section className="pt-40 a-section bg-custom-background-gray">
                <div className="flex items-center overflow-hidden ">
                    <h2 className="a-section-marquee-text text-4xl md:text-5xl lg:text-8xl font-space"> MY PROJECTS // MY PROJECTS // MY PROJECTS //</h2>
                    <h2 className="a-section-marquee-text text-4xl md:text-5xl lg:text-8xl font-space"> MY PROJECTS // MY PROJECTS // MY PROJECTS //</h2>
                </div>
            </section>

            <section className="px-4 sm:px-20 bg-custom-background-gray ">
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