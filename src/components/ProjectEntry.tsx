import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectEntryProps {
    title: string;
    type: string;
    technologies: string[];
    date: string;
    repoLink?: string;
    viewMoreLink?: string;
    apiReferenceLink?: string;
}
const ProjectEntry: React.FC<ProjectEntryProps> = ({
    title,
    type,
    technologies,
    date,
    repoLink,
    viewMoreLink,
    apiReferenceLink,
}) => {

    const techString = technologies.join('  //  ');

    return (
        <>
            <div className="grid grid-cols-12 gap-5">

                <div className='col-span-6'>
                    <h2 className="text-5xl font-space">{title}</h2>

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

                        {repoLink && (
                            <Link
                                to={repoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="flex px-4 w-fit pr-10">
                                    <div className="bg-custom-blue w-3 h-3 mr-3 mt-2"></div>
                                    <h3 className="text-custom-blue font-neopixel text-xl">GitHub Repo</h3>
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
            </div>

            <div className="grid grid-cols-12 gap-5 font-space">
                <p className="col-start-3 col-span-3">{type}</p>
                <p className="col-start-7 col-span-3">{techString}</p>
                <p className="col-start-12 text-right">{date}</p>
            </div>
        </>
    );
};

export default ProjectEntry;
