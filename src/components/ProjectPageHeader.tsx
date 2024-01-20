import React, { useState } from 'react';
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

    const techString = project.technologies.join('  //  ');

    return (

        <section className='px-4 lg:px-20 grid grid-cols-12'>

            <div className='row-start-1 col-span-full md:col-span-5 md:flex md:flex-col md:justify-center'>
                <div className='swipe'>
                    <h2 className="swipe-text text-4xl xl:text-6xl mb-5 pt-5 lg:pt-0">{project.title}</h2>
                    <p className='swipe-text text-custom-blue'>{project.type}</p>
                </div>

                {project.repoLink && (
                    <Link
                        to={project.repoLink}
                        target=""
                        rel="noopener noreferrer"
                        className="swipe flex items-center hover:text-custom-blue transition duration-200 ease-in-out w-fit mt-10"
                    >
                        <p className='swipe-text'>
                            View Repository
                        </p>
                    </Link>
                )}

            </div>

            <div className='row-start-2 col-span-12 md:row-start-1 md:col-start-7 md:col-span-6'>

                {<img src={project.pageImage} alt={project.title} className="w-full" />}
                <p className='text-custom-gray'>{project.pageImageCaption}</p>
                <div className='row-start-2 col-start-7 col-span-7 flex flex-row justify-between'>
                    <p>{techString}</p>
                    <p>{project.date}</p>
                </div>
            </div>
        </section >

    );
};

export default ProjectPageHeader;
