import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import projectsData from '../../projectsData';
import ProjectNav from '../../components/ProjectNav';
import ProjectPageHeader from '../../components/ProjectPageHeader';

import voxelRoom from '../../assets/images/va11halla/voxel-room.gif';
import ingameShot from '../../assets/images/va11halla/in-game-ui.webp';
import figmaShot1 from '../../assets/images/va11halla/figma-design-1.webp';
import figmaShot2 from '../../assets/images/va11halla/figma-design-2.webp';
import firebaseShot from '../../assets/images/va11halla/firebase-screenshot.webp';
import searchScreenCast from '../../assets/videos/va11halla/main-search.mp4';
import sortScreenCast from '../../assets/videos/va11halla/secondary-and-sort.mp4';

const SFUEA: React.FC = () => {

    // //brings to top of page
    // const location = useLocation();
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [location.pathname]);

    // Find the project with the title 'SFU Esports Association'
    const va11hallaProject = projectsData.find((project) => project.title === 'VA11-Hall-A Drinktionary Fansite');

    if (!va11hallaProject) {
        return <div>No SFU Esports Association project found</div>;
    }
    return (
        <>
            <section className='font-space bg-custom-background-gray pt-20'>

                <ProjectPageHeader project={va11hallaProject} />

                <section className='px-4 lg:px-20 grid grid-cols-12 md:gap-y-20 md:py-20'>
                    <div className='my-32 md:mt-10 row-start-1 col-span-full md:col-span-5'>
                        <p>
                            A dashboard ui design implemented in React, based on the 2016 visual novel (Va-11 Hall-A) by Sukeban Games.
                            <br></br><br></br>
                            This facilitated my introduction to React (UI library), Firebase (Google backend services), and Tailwind CSS (a CSS framework).
                        </p>
                    </div>

                    <div className='row-start-2 col-span-12 md:row-start-1 md:col-start-7 md:col-span-6'>
                        {<img src={voxelRoom} alt={va11hallaProject.title} className="w-full" />}
                        <p className='text-custom-gray'>Animated voxel art of the main character's room - made with MagicaVoxel, to be implemented with Threejs</p>
                    </div>
                </section>

                <section className='px-4 lg:px-20 grid grid-cols-12 pb-20 gap-y-20 mt-20 md:mt-0'>

                    <div className='row-start-1 col-span-full block md:col-span-5 md:flex md:flex-col md:justify-center'>
                        <h3 className='text-2xl mb-5'>Some Context</h3>
                        <p>
                            The gameplay and dialogue of va-11 hall-a progresses through bartending. Creating drinks involves the mixing of components and following preparation steps which can create flavors that match customer’s requests.

                            <br></br><br></br>
                            The choices of drinks and their proportions can influence the characters' moods and the direction of the narrative.
                        </p>

                    </div>

                    <div className='row-start-2 col-span-full md:row-start-1 md:col-start-7 md:col-span-6 md:sticky md:top-40'>
                        {<img src={ingameShot} alt={va11hallaProject.title} className="w-full" />}
                        <p className='text-custom-gray'>In-game screenshot of the drink mixing interface</p>
                    </div>

                    <div className='row-start-3 col-span-full md:row-start-2 md:col-span-5'>
                        <h3 className='text-2xl mb-5'>Project Motivations</h3>
                        <p>
                            The game’s recipe book doesn’t allow for quick retrieval and comparison of drink recipes. Each recipe is restricted to its unique page, and players can only browse through name, flavor, and type individually.
                            <br></br><br></br>
                            It should still be noted that the game's recipe book shares the same scene as the mixing interface. The recipe book is restricted to certain size, and the act of mixing drinks isn't the sole focus of the game, but rather the dialogue and story.
                            <br></br><br></br>
                            Nonetheless, I saw this as an opportunity to design a dashboard with a  quicker search mechanism, that also facilitates easy comparison between each drink.
                        </p>
                    </div>
                </section>

                <section className='px-4 lg:px-20 grid grid-cols-12 pb-20 gap-y-20 md:my-0'>
                    <div className='col-span-full row-start-1 md:col-span-5 md:flex md:flex-col md:justify-center'>
                        <h3 className='text-2xl mb-5'>The Data</h3>
                        <p>
                            Instead of manually creating the Firebase database content, the Beatiful Soup Python library was used to scrape drink information from the va11halla.fandom site.
                        </p>
                        <br></br>
                        <p>
                            The output from the Python script was then imported into Firebase.
                        </p>
                    </div>

                    <div className='row-start-2 col-span-full md:row-start-1 md:col-start-7 md:col-span-6'>
                        {<img src={firebaseShot} alt={va11hallaProject.title} className="w-full" />}
                    </div>
                </section>

                <section className='px-4 lg:px-20 grid grid-cols-12 md:mt-5'>

                    <h3 className='row-start-1 col-span-full md:col-span-5 text-2xl mb-5'>Figma Component Design</h3>
                    <div className='mb-20 row-start-2 col-span-12 md:col-span-5'>
                        <p>
                            The primary components of this dashboard could be split into interactive sort and filter selections, and content units (being the drink cards). Following the games colorful and busy cyberpunk theme, I used vivid neon-like colors to denote interaction and drink ingredients.
                        </p>
                    </div>
                    <div className='mt-20 md:mt-0 mb-20 row-start-4 col-span-full md:row-start-2 col-start-1 md:col-start-7 md:col-span-5'>
                        <p>
                            To reduce cognitive load and allows users to quickly scan and compare recipes, pills were implemented, with specific colors reflect symbolize in-game ingredients and their color.
                        </p>
                    </div>
                    <div className='row-start-3 col-start-1 col-span-full md:col-span-6'>
                        {<img src={figmaShot1} alt={va11hallaProject.title} className="w-full" />}
                    </div>
                    <div className='row-start-5 col-span-full md:row-start-3 md:col-start-7 md:col-span-6'>
                        {<img src={figmaShot2} alt={va11hallaProject.title} className="w-full" />}
                    </div>
                </section>

                <section className='px-4 lg:px-20 grid grid-cols-12 md:my-10'>
                    <div className='mt-20 col-span-full col-start-1 md:col-start-2 md:col-span-10 lg:col-start-3  lg:col-span-8'>
                        <h3 className='text-2xl mb-5'>Implementation: Multi-layered Search and Fitlering of drinks</h3>
                        <p className='md:w-3/4 mb-20'>
                            The app uses Firebase SDK to fetch drink data from Firestore, organized in a 'drinks' collection. The data is stored in the component's state with useState. Sorting options like name, price, or flavor are available, optimized using useMemo to prevent unnecessary recalculations. 
                            <br></br><br></br>
                            The sorting considers user-selected options such as search query, types, flavor, and sorting criteria for an efficient and responsive user experience, allowing easy exploration and selection of drinks.
                        </p>
                        <video className='mb-5' loop autoPlay muted >
                            <source src={searchScreenCast} type="video/mp4" />
                        </video>
                        <p className='text-base mb-40'> Search bar and Primary Flavour toggle</p>

                        <video className='mb-5' loop autoPlay muted >
                            <source src={sortScreenCast} type="video/mp4" />
                        </video>
                        <p className='text-base mb-40'>Secondary flavor and sorting</p>
                    </div>
                </section>

                <ProjectNav projectsData={projectsData} />
            </section>
        </>
    );
};

export default SFUEA;
