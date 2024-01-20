import React, { useState } from 'react';
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
    const [isHovered, setHovered] = useState(false);
    const [isProjectHovered, setProjectHovered] = useState(false);

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent) => {
        setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    top: cursorPosition.y + 20,
                    left: cursorPosition.x + 20,
                    display: isProjectHovered && !isHovered ? 'block' : 'none',
                }}
            >
                <h3 className="text-custom-blue font-neopixel text-xl">
                    <div className="flex ">
                        <div className={`bg-custom-blue w-2 h-2 mr-3 mt-2`}></div>
                        <h3 className="text-custom-blue font-space text-base">{title}</h3>
                    </div>
                </h3>
            </div>

            <Link
                to={viewMoreLink || apiReferenceLink || ''}
                className="grid cols-4 sm:grid-cols-8 lg:grid-cols-12 pt-36 hover:cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setProjectHovered(true)}
                onMouseLeave={() => setProjectHovered(false)}
            >
                <div className='row-start-2 lg:row-start-1 col-span-4 lg:col-span-6 flex flex-col justify-center'>

                    <h2 className={`text-4xl sm:text-5xl font-space mb-5 pt-5 lg:pt-0`}>{title}</h2>

                    <div className='flex w-fit'
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        {viewMoreLink && (
                            <Link
                                to={viewMoreLink}
                                target=""
                                rel="noopener noreferrer"
                                className="view-more-button"
                            >
                                <div className="flex px-4 border border-custom-blue hover:border-custom-blue  pr-10

                                hover:before:bg-custom-blue relative transition-all 
                                before:absolute before:bottom-0 before:left-0 before:top-0  before:h-full before:w-0 before:bg-purple-500 before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full
                                
                                ">
                                    <div className={`duration-100 bg-${isHovered ? 'custom-background-gray' : 'custom-blue'} relative z-10 w-3 h-3 mr-3 mt-2 rotate-square`}></div>
                                    <h3 className={`duration-100 text-${isHovered ? 'custom-background-gray' : 'custom-blue'} relative z-10 font-space text-xl`}>View More</h3>
                                </div>
                            </Link>

                        )}
                        {apiReferenceLink && (
                            <Link
                                to={apiReferenceLink}
                                target=""
                                rel="noopener noreferrer"
                                className="view-more-button"
                            >
                                <div className="flex px-4 border border-custom-blue hover:border-custom-blue  pr-10

                            hover:before:bg-custom-blue relative transition-all 
                            before:absolute before:bottom-0 before:left-0 before:top-0  before:h-full before:w-0 before:bg-purple-500 before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full
                            
                            ">
                                    <div className={`duration-100 bg-${isHovered ? 'custom-background-gray' : 'custom-blue'} relative z-10 w-3 h-3 mr-3 mt-2 rotate-square`}></div>
                                    <h3 className={`duration-100 text-${isHovered ? 'custom-background-gray' : 'custom-blue'} relative z-10 font-space text-xl`}>API Reference</h3>
                                </div>
                            </Link>
                        )}
                        
                    </div>
                </div>
                <div className='col-span-4 sm:col-span-8 lg:col-span-6'>
                    {image && <img src={image} alt={title} className="w-full" />}
                </div>
            </Link>
            <div className={`grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-0 font-space pb-10 pt-5 border-b transition duration-300 ease-in-out ${isHovered ? 'border-custom-blue' : 'border-custom-gray'}`}>
                <p className="col-span-4 lg:row-start-1 lg:col-start-1 lg:col-span-3">{type}</p>
                <p className="row-start-2 pt-10 lg:pt-0 col-span-2 sm:col-span-6 lg:col-start-7 lg:row-start-1 lg:col-span-3">{techString}</p>
                <p className="row-start-2  col-start-4 col-span-2 sm:col-span-4 lg:row-start-1 lg:col-start-12 lg:col-span-3 flex self-end justify-end">{date}</p>
            </div>
            
        </>
    );
};

export default ProjectEntry;
