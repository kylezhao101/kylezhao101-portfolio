import ProjectEntry from '../../components/ProjectEntry';
import projectsData from '../../projectsData'

const Projects: React.FC = () => {
    return (
        <section id="works" className="px-4 sm:px-20 bg-custom-background-gray pt-60">
            <div className="flex items-start">
                <div className="bg-custom-blue w-3 h-3 mr-3 mt-2"></div>
                <h3 className="font-space text-xl">My work</h3>
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