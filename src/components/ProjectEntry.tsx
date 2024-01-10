import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectEntryProps {
    title: string;
    image?: string;
    type: string;
    technologies: string[];
    date: string;
    repoLink?: string;
    viewMoreLink?: string;
    apiReferenceLink?: string;
}
const ProjectEntry: React.FC<ProjectEntryProps> = ({
    title,
    image,
    type,
    technologies,
    date,
    viewMoreLink,
    apiReferenceLink,
}) => {

    const techString = technologies.join('  //  ');

    return (
        <>
            <div className="grid cols-4 sm:grid-cols-8 lg:grid-cols-12 mt-36 ">

                <div className='row-start-2 lg:row-start-1 col-span-4 lg:col-span-6 flex flex-col justify-center'>

                    <h2 className="text-4xl font-space mb-5 pt-5 lg:pt-0">{title}</h2>

                    <div className='flex'>
                        {viewMoreLink && (
                            <Link
                                to={viewMoreLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="flex px-4 border-2 border-custom-blue  hover:border-custom-blue hover:text-custom-blue w-fit pr-10">
                                    <div className="bg-custom-blue w-3 h-3 mr-3 mt-2"></div>
                                    <h3 className="text-custom-blue font-neopixel text-xl">View More</h3>
                                </div>
                            </Link>
                        )}

                        {apiReferenceLink && (
                            <Link
                                to={apiReferenceLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="flex px-4 w-fit pr-10">
                                    <div className="bg-custom-blue w-3 h-3 mr-3 mt-2"></div>
                                    <h3 className="text-custom-blue font-neopixel text-xl">API Reference</h3>
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
                <div className='col-span-4 sm:col-span-8 lg:col-span-6'>
                    {image && <img src={image} alt={title} className="w-full" />}
                </div>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-0 font-space pb-20 border-b-2 border-custom-gray">
                <p className="pt-10 col-span-4 lg:row-start-1 lg:col-start-1 lg:col-span-3">{type}</p>
                <p className="row-start-2 pt-10 col-span-2 sm:col-span-6 lg:col-start-7 lg:row-start-1 lg:col-span-3">{techString}</p>
                <p className="row-start-2 pt-10 col-start-4 col-span-2 sm:col-span-4 lg:row-start-1 lg:col-start-12 lg:col-span-3 flex self-end justify-end">{date}</p>
            </div>
        </>
    );
};

export default ProjectEntry;
