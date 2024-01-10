import ProjectEntry from '../../components/ProjectEntry';
import crown from '../../assets/images/sfuea/crown.webp';
import roamfy from '../../assets/images/roamfy/Roamfy-mockup.webp';
import va11halla from '../../assets/images/va11halla/va11halla-mockup.webp';

const Projects: React.FC = () => {
    const projectsData = [
        {
            title: 'VA11-Hall-A Drinktionary Fansite',
            type: 'UI Design // Web Development',
            technologies: ['React', 'Firebase', 'Tailwind', 'React Three Fiber', 'Python'],
            date: '08.2023',
            repoLink: 'https://github.com/kylezhao101/va11halla-drink-recipes',
            viewMoreLink: 'View More Link here',
            image: va11halla,
        },
        {
            title: 'Roamfy (IAT 352)',
            type: 'SQL // CRUD // AJAX // Auth // Frontend // Backend',
            technologies: ['PHP', 'mySQL', 'jQuery', 'HTML', 'CSS'],
            date: '12.2023',
            repoLink: 'https://github.com/kylezhao101/remote-IAT352/tree/main/Roamfy',
            viewMoreLink: 'View More Link here',
            image: roamfy,
        },
        {
            title: 'Resume REST API',
            type: 'API CRUD // Auth // Backend',
            technologies: ['MongoDB', 'Express', 'Node'],
            date: '10.2023',
            apiReferenceLink: 'https://github.com/kylezhao101/kylezhao101-api'
        },
        {
            title: 'SFU Esports Association',
            type: 'Design Executive - GFX & player branding',
            technologies: ['Photoshop', 'Figma'],
            date: '2022 - ongoing',
            viewMoreLink: 'View More Link here',
            image: crown,
        },

    ];

    return (
        <section id="projects" className="px-4 sm:px-20 bg-custom-background-gray pt-60">
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