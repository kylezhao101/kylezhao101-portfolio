import React from 'react';
import projectsData from '../../projectsData';

import sunsetSeries from '../../assets/images/sfuea/sunset-series.webp';
import crown from '../../assets/images/sfuea/crown.webp';
import ktruue from '../../assets/images/sfuea/KTRUUE.webp';
import s1ay3rr from '../../assets/images/sfuea/s1ay3rr.webp';
import yuzu from '../../assets/images/sfuea/yuzu.webp';
import ottoisgun from '../../assets/images/sfuea/ottoisgun.webp';
import happyheart from '../../assets/images/sfuea/happyheart.webp';

import lunr from '../../assets/images/sfuea/lunr.webp';
import colingogo from '../../assets/images/sfuea/colingogo.webp';

import mai from '../../assets/images/sfuea/mai.webp';
import angelspell from '../../assets/images/sfuea/angelspell.webp';



const SFUEA: React.FC = () => {

  // Find the project with the title 'SFU Esports Association'
  const sfueaProject = projectsData.find((project) => project.title === 'SFU Esports Association');

  if (!sfueaProject) {
    return <div>No SFU Esports Association project found</div>;
  }

  const techString = sfueaProject.technologies.join('  //  ');
  
  const imageSources = [crown, ktruue, s1ay3rr, yuzu, ottoisgun, happyheart, lunr, colingogo, mai, angelspell];

  return (
    <>
      <section className='font-space bg-custom-background-gray pt-20'>
        <section className='px-4 sm:px-20 gap-5 grid grid-cols-12'>


          <div className='col-span-5 flex flex-col justify-center'>
            <div className='swipe'>
              <h2 className="swipe-text text-7xl mb-5 pt-5 lg:pt-0">{sfueaProject.title}</h2>
              <p className='swipe-text text-custom-blue'>{sfueaProject.type}</p>
            </div>

          </div>

          <div className='col-start-7 col-span-8'>
            {<img src={sunsetSeries} alt={sfueaProject.title} className="w-full" />}
            <p className='text-custom-gray'>Sunset Series LAN Tournament Lanyards</p>
          </div>

          <div className='row-start-2 col-span-5'>
            <p>A selection of graphics made for the SFU Esports Association.
              <br></br><br></br>
              As an club executive of design, I aim to fulfill requests of  club coordinators and competitive team players to the best of my abilities and to contribute to the greater SFU gaming community (lol hopefully).

            </p>
          </div>
          <div className='row-start-2 col-start-7 col-span-7 flex flex-row justify-between'>
            <p>{techString}</p>
            <p>{sfueaProject.date}</p>
          </div>
        </section>

        <div className='py-40 mx-auto max-w-lg'>
          <p>
            I’ve created over 40 personalized banners as per the individual requests of our competitive and Varsity players, whom I've communicated with throughout the process.
            <br></br><br></br>
            The following are 10 selected works:
          </p>
        </div>

        <div className="flex flex-wrap">
        {imageSources.map((image, index) => (
          <div key={index} className="w-1/2">
            <img src={image} alt={`Image ${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>
      </section>
    </>
  );
};

export default SFUEA;
