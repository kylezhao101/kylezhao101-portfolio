import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import projectsData from '../../projectsData';
import ProjectNav from '../../components/ProjectNav';
import ProjectPageHeader from '../../components/ProjectPageHeader';

import erDiagram from '../../assets/images/roamfy/ER-diagram.webp';
import editScreenCast from '../../assets/videos/roamfy/roamfy-edit.mp4';
import commentScreenCast from '../../assets/videos/roamfy/comment.mp4';
import deleteConfirm from '../../assets/videos/roamfy/delete-confirm.mp4';
import passwordChange from '../../assets/images/roamfy/passwordChange.webp';

const ROAMFY: React.FC = () => {

    // //brings to top of page
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
            <section className='font-space bg-custom-background-gray'>

                <ProjectPageHeader project={roamfyProject} />

                <section className='py-20 px-4 lg:px-20 grid grid-cols-12'>
                    <h3 className='my-20 md:mt-10 row-start-1 text-2xl mb-5 col-span-full'>Project Motivations</h3>
                    <p className='row-start-2 col-span-12 md:col-span-5 col-start-1'>
                        Roamfy is an itinerary sharing platform designed to assist users and visitors in planning, tracking, exploring, and sharing trip itineraries.
                        The platform facilitates community engagement by offering a homepage to explore all itineraries, detailed pages with daily entries, a comment section, and an itinerary editing page.
                    </p>
                    <p className='mt-20 md:mt-0 row-start-3 col-span-12 md:row-start-2 md:col-span-6 col-start-1 md:col-start-7'>
                        This project employed the XAMPP Development environment taught in IAT 352. PHP served for server-side processing, generating dynamic content, interacting with the MySQL database, and handling user requests. AJAX (Asynchronous JavaScript and XML) and jQuery enhanced user interaction, ensuring a responsive interface.
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

                <section className='px-4 lg:px-20 grid grid-cols-12 md:my-10'>
                    <div className='mt-20 col-span-full col-start-1 md:col-start-2 md:col-span-10 lg:col-start-3  lg:col-span-8'>
                        <h3 className='text-2xl mb-5'>Implementation</h3>
                        <p className='md:w-3/4 mb-20'>
                            The website's implementation ensures a smooth flow of data between the frontend and backend, allowing users to seamlessly plan, share, and receive feedback on their travel itineraries. The integration of AJAX and jQuery enhances the user interface, providing a dynamic and responsive platform for a community.
                        </p>
                        <video className='mb-5' loop autoPlay muted >
                            <source src={editScreenCast} type="video/mp4" />
                        </video>
                        <p className='text-base mb-40'>Itinerary filtering and editing page utilizing AJAX for responsive and asynchronous results</p>

                        <video className='mb-5' loop autoPlay muted >
                            <source src={commentScreenCast} type="video/mp4" />
                        </video>
                        <p className='text-base mb-40'>AJAX Comment posting</p>
                    </div>

                    <div className='col-span-8 row-start-2 md:col-start-2 md:col-span-6 lg:col-start-3  lg:col-span-5'>
                        <video className='mb-5' loop autoPlay muted >
                            <source src={deleteConfirm} type="video/mp4" />
                        </video>
                        <p className='col-span-full text-base'>Itinerary deletion confirmation and show password</p>
                    </div>
                    <div className='col-span-4 row-start-2 md:col-start-9 md:col-span-3 lg:col-start-9 lg:col-span-2'>
                        {<img src={passwordChange} alt={roamfyProject.title} className="w-full" />}
                        
                    </div>
                </section>
                <ProjectNav projectsData={projectsData} />
            </section >
        </>
    );
};

export default ROAMFY;
