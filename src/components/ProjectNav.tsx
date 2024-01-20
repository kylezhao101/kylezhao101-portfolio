import { Link } from 'react-router-dom';

const ProjectNav: React.FC<{ projectsData: Array<any> }> = ({ projectsData }) => {

  return (
    <div className="mt-32 px-4 lg:px-20 pt-28">
      {projectsData.map((project, index) => (
        <Link
          to={project.apiReferenceLink ? project.apiReferenceLink : project.viewMoreLink}
          target={project.apiReferenceLink ? '_blank' : '_self'} 
          rel={project.apiReferenceLink ? 'noopener noreferrer' : ''} 
          key={index}
          className="border-t border-black hover:text-custom-blue transition duration-200 ease-in-out py-2 grid grid-cols-12"
        >
          <p className='col-span-2 pr-2 hidden md:block'>{project.date}</p>
          <p className='col-span-6 md:col-span-4 pr-2'>{project.title}</p>
          <p className='col-span-6 pr-2'>{project.type}</p>
        </Link>
      ))}
    </div>
  );
};

export default ProjectNav;
