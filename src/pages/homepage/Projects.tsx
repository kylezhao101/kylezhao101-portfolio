import ProjectEntry from '../../components/ProjectEntry';
import projectsData from '../../projectsData'

const Projects: React.FC = () => {
    return (
        <section id="works" className="px-4 sm:px-20 bg-custom-background-gray pt-60">
            <div className="font-neopixel text-5xl sm:text-7xl">
                <h2>My Work</h2>
            </div>
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
    );
};

export default Projects;