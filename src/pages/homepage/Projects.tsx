import ProjectEntry from '../../components/ProjectEntry';

const Projects: React.FC = () => {
    const projectsData = [
        {
            title: 'VA11-Hall-A Drinktionary Fansite',
            type: 'UI Design // Web Development',
            technologies: ['React', 'Firebase', 'Tailwind', 'React Three Fiber', 'Python'],
            date: '08.2023',
            repoLink: 'https://github.com/kylezhao101/va11halla-drink-recipes',
            viewMoreLink: 'View More Link here',
        },
        {
            title: 'Roamfy (IAT 352)',
            type: 'SQL // CRUD // AJAX // Auth // Frontend // Backend',
            technologies: ['PHP', 'mySQL', 'jQuery', 'HTML', 'CSS'],
            date: '12.2023',
            repoLink: 'https://github.com/kylezhao101/remote-IAT352/tree/main/Roamfy',
            viewMoreLink: 'View More Link here',
        },
        {
            title: 'Resume REST API',
            type: 'SQL // CRUD // AJAX // Auth // Frontend // Backend',
            technologies: ['MongoDB', 'Express', 'Node'],
            date: '10.2023',
            apiReferenceLink: 'https://github.com/kylezhao101/kylezhao101-api'           
        },

    ];

    return (
        <section className="px-20 bg-custom-background-gray">
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-4 font-neopixel text-7xl">
                    <h2 className=" ">
                        My Work
                    </h2>
                </div>
            </div>
            {projectsData.map((project, index) => (
                <ProjectEntry
                    key={index}
                    title={project.title}
                    type={project.type}
                    technologies={project.technologies}
                    date={project.date}
                    repoLink={project.repoLink}
                    viewMoreLink={project.viewMoreLink}
                    apiReferenceLink={project.apiReferenceLink}
                />
            ))}
        </section>
    );
};

export default Projects;