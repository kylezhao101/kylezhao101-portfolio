import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import projectsData from '../../projectsData';
import ProjectNav from '../../components/ProjectNav';
import ProjectPageHeader from '../../components/ProjectPageHeader';

import erDiagram from '../../assets/images/roamfy/ER-diagram.webp';

const ROAMFY: React.FC = () => {

    //brings to top of page
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // Find the project with the title 'SFU Esports Association'
    const roamfyProject = projectsData.find((project) => project.title === 'Roamfy (IAT 352)');

    if (!roamfyProject) {
        return <div>Roamfy (IAT 352) project found</div>;
    }

    return (
        <>
            <section className='font-space bg-custom-background-gray pt-20'>
                
                <ProjectPageHeader project={roamfyProject}/>

                <section className='mt-32 md:mt-0 px-4 lg:px-20 grid grid-cols-12'>
                    <h3 className='text-2xl mb-5 col-span-full'>Project Motivations</h3>
                    <p className='row-start-2 col-span-12 md:col-span-5 col-start-1'>
                        Roamfy is an itinerary sharing platform designed to assist users and visitors in planning, tracking, exploring, and sharing trip itineraries.
                        The platform facilitates community engagement by offering a homepage to explore all itineraries, detailed pages with daily entries, a comment section, and an itinerary editing page.
                    </p>
                    <p className='mt-20 md:mt-0 row-start-3 col-span-12 md:row-start-2 md:col-span-5 col-start-1 md:col-start-7'>
                        The project employed the XAMPP Development environment taught in IAT 352. PHP served for server-side processing, generating dynamic content, interacting with the MySQL database, and handling user requests. AJAX and jQuery enhanced user interaction, ensuring a responsive interface.
                    </p>
                </section>

                <section className='px-4 lg:px-20 grid grid-cols-12 mt-20 '>
                    <h3 className='text-2xl mb-5 col-span-full'>The Database</h3>
                    <p className='row-start-2 col-span-full md:col-span-5 col-start-1'>
                        To design the SQL database structure, the main components and content units were decided. The project focused on two main entities: Itineraries and Users.
                    </p>
                    <ul className='mt-20 md:mt-0 pl-5 col-span-full md:col-span-5 col-start-1 md:col-start-7 row-start-3 md:row-start-2 list-disc'>
                        <li><strong>Members</strong> can create multiple <strong>itineraries.</strong></li>
                        <li><strong>itineraries</strong> can have optional day <strong>entries.</strong></li>
                        <li><strong>itineraries</strong> have comments, allowing <strong>members</strong> to <strong>comment.</strong></li>
                        <li><strong>itineraries</strong> can be liked by <strong>members</strong>, adding them to their liked collection.</li>
                    </ul>
                    <div className='mt-20 row-start-4 md:row-start-3 col-start-1 md:col-start-3 col-span-full md:col-span-8'>
                        {<img src={erDiagram} alt={roamfyProject.title} className="w-full" />}
                        <p className='text-custom-gray'>Entity Relationship Diagram for the Roamfy database</p>
                    </div>

                </section>

                <ProjectNav projectsData={projectsData} />
            </section >
        </>
    );
};

export default ROAMFY;
