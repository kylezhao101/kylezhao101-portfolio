import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectDetails {
    title: string;
    pageImage?: string;
    type: string;
    technologies: string[];
    date: string;
    repoLink?: string;
    pageImageCaption?: string;
}
interface ProjectDetailProps {
    project: ProjectDetails;
}

const ProjectPageHeader: React.FC<ProjectDetailProps> = ({ project }) => {

    const techString = project.technologies.join(', ');

    return (

        <section className='px-4 lg:px-20 grid grid-cols-12'>

            <div className='row-start-1 col-span-full md:col-span-5 md:flex md:flex-col md:justify-end'>
                <div className='swipe'>
                    <h2 className="swipe-text text-4xl xl:text-6xl mb-5 pt-5 lg:pt-0">{project.title}</h2>
                    <p className='swipe-text text-custom-blue'>{project.type}</p>
                </div>
                {project.repoLink && (
                    <Link
                        to={project.repoLink}
                        target=""
                        rel="noopener noreferrer"
                        className="swipe flex items-center hover:text-custom-blue transition duration-200 ease-in-out w-fit"
                    >
                        <p className='swipe-text'>
                            View Repository
                        </p>
                    </Link>
                )}
                <div className='row-start-2 col-start-7 col-span-7 flex flex-wrap gap-5 mt-20'>
                    <div>
                        <p className='font-bold'>Tools</p>
                        <p className='w-3/4'>{techString}</p>
                    </div>
                    <div>
                        <p className='font-bold'>Timespan</p>
                        <p>{project.date} - 10.2023</p>
                    </div>

                    <div>
                        <p className='font-bold'>Type</p>
                        <p>Independent & personal project</p>
                    </div>
                </div>
            </div>

            <div className='row-start-2 col-span-12 md:row-start-1 md:col-start-7 md:col-span-6'>
                {<img src={project.pageImage} alt={project.title} className="w-full" />}
                <p className='pt-2'>{project.pageImageCaption}</p>
            </div>
        </section >

    );
};

export default ProjectPageHeader;
